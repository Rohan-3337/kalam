const mongoose = require("mongoose");
const hero = new mongoose.Schema({
    title:String,
    subtitle:String,
    imageurl:String
})

module.exports = mongoose.model("hero",hero);