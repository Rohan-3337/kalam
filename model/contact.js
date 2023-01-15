const mongoose = require("mongoose");
const Contact = new mongoose.Schema({
    address:String,
    gmail:String,
    phone:String,

})

module.exports = mongoose.model("contact",Contact);