const { connect } = require("mongoose");
const connectdb = require('./db.config/db.config')
const express = require("express");
const app = express();
const port = 3000;
const detail = require('./model/Detail');
const hero = require('./model/hero');
const team = require('./model/team')
const prod = require('./model/product')
const DATABASE_URL = 'mongodb://localhost:27017';
const web = require('./routes/web');
const about  = require('./model/about');


// about.create({
//   para1:"Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Eum Reprehenderit Cum Aliquid Enim Placeat Dolores Rerum Dignissimos Ullam! Quas, Debitis.",
//   para2:"Lorem Ipsum Dololr Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Totam Perferendis Reprehenderit Ut Magni Labore Quis Et Sed Vel Dicta Voluptatibus. Sit Amet Consectetur Adipisicing Elit. Dolorum, Saepe Ipsa Ut Quidem Similique Laudantium?00",
//   links:[
//     {
//       url:"www.facebook.com"
//     },
//     {
//       url:"www.twitter.com"
//     },
//     {
//       url:"www.instagam.com"
//     },
//     {
//       url:"www.pinterest.com"
//     },

//   ]
// })
// contact.create({
//   address:"New Delhi India-110030",
//   gmail:"Xyz@Gmail.Com",
//   phone:"9999999999"
// })
app.use(express.static(__dirname + '/public'));
    // Setting the app router and static folder
// app.use(express.static(path.resolve('./public')));
// app.use('/public', express.static(path.resolve('./public'))); //<--new line added
app.use('/images', express.static('images'));
app.use("/",web);

connectdb(DATABASE_URL);
app.set('view engine', 'ejs');

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
}) 