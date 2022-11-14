const express=require("express");
const {deleteParticularRegistration}=require("../controllers/adminController");
const {deleteAllRegistrationWithEventId}=require("../controllers/adminController");

const {getRegistrationsWithEventId}=require("../controllers/adminController");

const router=express.Router();
router.route('/getRegistrationInfo').post(getRegistrationsWithEventId);
router.route('/deleteRegistrationRecord').delete(deleteParticularRegistration);
router.route('/deleteEventRegistration').delete(deleteAllRegistrationWithEventId);

module.exports = router;
