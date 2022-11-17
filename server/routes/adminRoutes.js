const express=require("express");
const {deleteParticularRegistration}=require("../controllers/RegistrationController");
const {deleteAllRegistrationWithEventId}=require("../controllers/RegistrationController");

const {getRegistrationsWithEventId}=require("../controllers/RegistrationController");

const router=express.Router();
router.route('/getRegistrationInfo').post(getRegistrationsWithEventId);
router.route('/deleteRegistrationRecord').delete(deleteParticularRegistration);
router.route('/deleteEventRegistration').delete(deleteAllRegistrationWithEventId);

module.exports = router;
