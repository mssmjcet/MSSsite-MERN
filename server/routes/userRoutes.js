const path=require('path');
const express=require("express");
const { addEventRegistration} = require("../controllers/userController");
const router=express.Router();
var multer = require('multer');

var upload = multer({
  storage:multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,path.join(__dirname,'./../../uploads'));
    },
    filename:function(req,file,callback){
      callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

});

router.post("/registerEvent",upload.single("PaymentScreenshot"),addEventRegistration);


module.exports = router;
