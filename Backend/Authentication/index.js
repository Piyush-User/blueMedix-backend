const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")

const mongoConnection = require("./connection")

const urlRoutes = require("./Routes/url.route")
const staticRoutes = require("./Routes/static.route")
const userRoutes = require("./Routes/user.route")

const URL = require("./models/url")
const {restrictToDirectAccess} = require("./middlewares/auth")

const app = express()

mongoConnection("mongodb://localhost:27017/DB_1st").then(() => 
    console.log("Database connected")
);

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())


app.use("/URL",restrictToDirectAccess, urlRoutes)
app.use("/", staticRoutes)
app.use("/user", userRoutes)

app.get("/URL/:shortID", async (req, res) => {
    const shortId = req.params.shortID

    const entry = await URL.findOneAndUpdate({shortId},
        {$push: {
            visitedHistory: {
                timeStamp: Date.now() 
            }
        }}
    )
    console.log(entry)
    res.redirect(entry.redirectURL)
})

app.listen(5000, () => console.log("server is running....:)"))