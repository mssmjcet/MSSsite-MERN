const express=require("express");
const {deleteParticularRegistration}=require("../controllers/RegistrationController");
const {deleteAllRegistrationWithEventId}=require("../controllers/RegistrationController");
const {getRegistrationsWithEventId}=require("../controllers/RegistrationController");

const {deleteParticularEvent}=require("../controllers/EventController");
const {addNewEvent}=require("../controllers/EventController");
const {updateParticularEvent}=require("../controllers/EventController");
const {getEventWithId}=require("../controllers/EventController");

const {addNewProject}=require("../controllers/ProjectsController");
const {getProjectWithId}=require("../controllers/ProjectsController");
const {deleteParticularProject}=require("../controllers/ProjectsController");
const {updateParticularProject}=require("../controllers/ProjectsController");

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
router.route('/Event/:eventId').delete(deleteParticularEvent);
router.route('/Event').put()
router.route('/Event/changeStatus').put()

//project routes
router.route('/Project').get(getProjectWithId);
router.route('/Project').post(addNewProject);
router.route('/Project').put(updateParticularProject);
router.route('/Project/:projectId').delete(deleteParticularProject);

module.exports = router;
