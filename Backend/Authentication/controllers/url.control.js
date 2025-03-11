const {URL} = require("../models/url")

function ShortId(num){
    let result = ""
    let Characters = "abcdefghijklmnopqrstuvwxyz0123456789"

    for(let i = 0; i < num; i++){
        const randomInd = Math.floor(Math.random() * Characters.length);
        result += Characters.charAt(randomInd);
    }
    return result;
}

async function handleToGenerateShortId(req, res) {
    const shortId = ShortId(8);

    const data = req.body;
    if(!data.url) res.status(400).json({msg: "url not found"});

    await URL.create({
        shortId: shortId,
        redirectURL: data.url,
        visitedHistory: [],
        createdBy: req.user._id
    })
    
    return res.render("home", {
        id: shortId
    })
    // return res.json({id: shortId, msg: "shortId success... and added to DB"})

}

module.exports = {
    handleToGenerateShortId,
}