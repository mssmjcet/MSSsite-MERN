const express=require("express");
const { addEventRegistration} = require("../controllers/userController");
const router=express.Router();
var multer = require('multer');

var upload = multer();
var type = upload.single('file');

router.route("/registerEvent").post(addEventRegistration);


module.exports = router;