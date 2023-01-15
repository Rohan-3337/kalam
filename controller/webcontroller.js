const Detail = require('../model/Detail');
const image  = require('../model/hero.js');

const section =require('../model/team');
const prod = require('../model/product');
const aboutsection = require('../model/about');
// const model_1  = require('../model/contact');
const contact = require('../model/contact');

if(!contact){
    console.log("err");
}else{
    console.log("succesfull")
}



class webcontroller{
    static home = async (req,res) =>{
        const details = await Detail.findById({"_id":"62ffa29472825c3f4cc6b21e"});
        const hero = await image.find()
        const team = await section.find()
        const product = await prod.findById({"_id":"6304e030fa10b0f231ec4a02"});
        const product1 = await prod.findById({"_id":"63062d7bca4ae50ea594b8d2"});
        const about = await aboutsection.findById({"_id":"6308b13c4f0344b8f43a723d"});
        const contactsection = await contact.findById({"_id":"632ffba3001576eac43710a2"});
        if(!contactsection){
            console.log("contactsection is not found");
        }else{
            console.log(contactsection)
        }
        res.render('index',{
            details:details,
            main:hero,
            team:team,
            items:product,
            item:product1,
            about:about,
            c_section:contactsection,
        })
    }

    static about = async(req,res) =>{
        const details = await Detail.findById({"_id":"62ffa29472825c3f4cc6b21e"})
        const about = await aboutsection.findById({"_id":"6308b13c4f0344b8f43a723d"});

        res.render("about",{
            details:details,
            about:about,
        })
    }

    static contact = async (req,res) =>{
        const details = await Detail.findById({"_id":"62ffa29472825c3f4cc6b21e"});
        const contactsection = await contact.findById({"_id":"632ffba3001576eac43710a2"});

        res.render("contact",{
            details:details,
            c_section:contactsection,
        })
    }
    static product = async (req,res) =>{
        const details = await Detail.findById({"_id":"62ffa29472825c3f4cc6b21e"});
        const product = await prod.findById({"_id":"6304e030fa10b0f231ec4a02"});
        const product1 = await prod.findById({"_id":"63062d7bca4ae50ea594b8d2"});
        res.render("product",{
            details:details,
            items:product,
            item:product1,
        })
    }
    static admin = async (req,res)=>{
        const details = await Detail.findById({"_id":"62ffa29472825c3f4cc6b21e"});
        const hero = await image.find()
        const team = await section.find()
        const product = await prod.find();
        const about = await aboutsection.findById({"_id":"6308b13c4f0344b8f43a723d"});
        const contactsection = await contact.findById({"_id":"632ffba3001576eac43710a2"});
        res.render('web',{
            details:details,
            main:hero,
            team:team,
            products:product,
            about:about,
            c_section:contactsection,
        });
    }

    
}

module.exports = webcontroller;