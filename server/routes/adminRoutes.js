const express=require("express");
const {getRegistrationsWithEventId}=require("../controllers/adminController");

const router=express.Router();
router.route('/getRegistrationInfo').post(getRegistrationsWithEventId);

module.exports = router;
