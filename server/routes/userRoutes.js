const express=require("express");
const { addEventRegistration} = require("../controllers/userController");
const router=express.Router();

router.route("/registerEvent").post(addEventRegistration);


module.exports = router;