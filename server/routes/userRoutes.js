const express=require("express");
const { addEventRegistration} = require("../controllers/RegistrationController");
const router=express.Router();


//registration routes

router.post("/Registration",addEventRegistration);

//event routes

router.route('/Event').get();
router.route('/Event/:state').get()

//project routes
router.route('/Project').get();

module.exports = router;
