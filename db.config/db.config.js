const mongoose = require('mongoose');


const connectDB = async (DATABASE_URL) => {
    try{
        const DB_OPTION ={
            dbname:'website',

        };
        await mongoose.connect(DATABASE_URL,DB_OPTION);
        console.log("connected successs fully")
    } catch (err){
        console.log(err)
    }
}
 
module.exports = connectDB;