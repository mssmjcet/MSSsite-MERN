const express=require("express");
const {deleteParticularRegistration}=require("../controllers/RegistrationController");
const {deleteAllRegistrationWithEventId}=require("../controllers/RegistrationController");

const {getRegistrationsWithEventId}=require("../controllers/RegistrationController");

const router=express.Router();
//registration routes
router.route('/Registration/:eventId').get(getRegistrationsWithEventId);
router.route('/Registration').post();
router.route('/Registration').put();
router.route('/Registration/:registrationId').delete(deleteParticularRegistration);
router.route('/Registration/Event/:eventId').delete(deleteAllRegistrationWithEventId);
router.route('/Registration/paymentStatus').put();

//event routes

router.route('/Event').get();
router.route('/Event/:state').get()
router.route('/Event').post();
router.route('/Event/:eventId').delete();
router.route('/Event').put()
router.route('/Event/changeStatus').put()

//project routes
router.route('/Project').get();
router.route('/Project').post();
router.route('/Project').put();
router.route('/Project/:projectId').delete();

module.exports = router;
