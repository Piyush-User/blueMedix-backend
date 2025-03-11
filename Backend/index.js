const express = require("express")
const cookieParser = require("cookie-parser")
const mongoConnection = require("./connection")
const userRoute = require("./routes/userWorking")

const app = express()

mongoConnection(process.env.MONGODB_URI).then(() => {
    console.log(`mongoDB connected succesfully`)
})

app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5000

//routes
app.use("/api", userRoute)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})