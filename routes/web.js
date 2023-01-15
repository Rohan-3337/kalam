const express =require("express");
const router = express.Router();
const webcontroller = require('../controller/webcontroller');

router.get("/",webcontroller.home);
router.get("/about",webcontroller.about);
router.get("/contact",webcontroller.contact);
router.get("/product",webcontroller.product);




module.exports = router;