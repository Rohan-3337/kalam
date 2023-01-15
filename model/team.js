const mongoose = require("mongoose");
const team = new mongoose.Schema({
    title:String,
    subtitle:String,
    para1:String,
    para2:String,
    imageurl:String
})

module.exports = mongoose.model("team",team);
