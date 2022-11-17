const express=require("express");
const {deleteParticularRegistration}=require("../controllers/RegistrationController");
const {deleteAllRegistrationWithEventId}=require("../controllers/RegistrationController");

const {getRegistrationsWithEventId}=require("../controllers/RegistrationController");

const router=express.Router();
//registration routes
router.route('/getRegistrationInfo/:eventId').get(getRegistrationsWithEventId);
router.route('/addRegistrationRecord').post();
router.route('/updateRegistrationInfo').put();
router.route('/deleteRegistrationRecord').delete(deleteParticularRegistration);
router.route('/deleteEventRegistration').delete(deleteAllRegistrationWithEventId);
router.route('/changePaymentStatusOfRegistration').put();

//event routes

router.route('/getEventInfo').get();
router.route('/getEventInfoWithState').get()
router.route('/createNewEvent').post();
router.route('/deleteEventRecord').delete();
router.route('/updateEventInfo').put()
router.route('/changeEventStatus').put()

//project routes
router.route('/getProjectInfo').get();
router.route('/createNewProject').post();
router.route('/updateProjectInfo').put();
router.route('/deleteProjectInfo').delete();

module.exports = router;
