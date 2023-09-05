const express=require("express");

const { saveFiles } = require("../controllers/AdminController");

const {addEventRegistration,
  deleteParticularRegistration,
  deleteAllRegistrationWithEventId,
  updateRegistrationDetails,
  getRegistrationsWithEventId}=require("../controllers/RegistrationController");

const {deleteParticularEvent,
      updateParticularEvent,
      addNewEvent,
      getAllEvents}=require("./../controllers/EventController");


const {addNewProject,
      getProjectWithId,
      deleteParticularProject,
      updateParticularProject,
      getAllProjects}=require("./../controllers/ProjectsController");
const { getAllMembers, getMemberWithId, addNewMember, updateParticularMember, deleteParticularMember } = require("../controllers/TeamsController");


const router=express.Router();
//registration routes
router.route('/Registration/:eventId').get(getRegistrationsWithEventId);
router.route('/Registration').post(addEventRegistration);
router.route('/Registration').put(updateRegistrationDetails);
router.route('/Registration/:registrationId').delete(deleteParticularRegistration);
router.route('/Registration/Event/:eventId').delete(deleteAllRegistrationWithEventId);
// router.route('/Registration/paymentStatus').put();

//event routes 

router.route('/Event').get(getAllEvents);
router.route('/Event/:state').get()
router.route('/Event').post(addNewEvent);
router.route('/Event/:eventId').delete(deleteParticularEvent);
router.route('/Event').put(updateParticularEvent);
// router.route('/Event/changeStatus').put()

//project routes
router.route('/Project').get(getAllProjects);
router.route('/Project/:projectId').get(getProjectWithId);
router.route('/Project').post(addNewProject);
router.route('/Project').put(updateParticularProject);
router.route('/Project/:projectId').delete(deleteParticularProject);

//teams routes
router.route('/Team').get(getAllMembers);
router.route('/Team/:memberId').get(getMemberWithId);
router.route('/Team').post(addNewMember);
router.route('/Team').put(updateParticularMember);
router.route('/Team/:memberId').delete(deleteParticularMember);

router.route('/save').post(saveFiles);

module.exports = router;
