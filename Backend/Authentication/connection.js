const mongoose = require("mongoose")

function mongoConnection(url){
    return mongoose.connect(url);
}

module.exports = mongoConnection