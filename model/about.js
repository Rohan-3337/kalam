const mongoose = require("mongoose")
const about = new mongoose.Schema({
    para1:String,
    para2:String,
    links:[
        {
            url:String
        }
    ]
});

module.exports = mongoose.model("about",about);