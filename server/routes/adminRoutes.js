const express=require("express");
var multer = require('multer');
const path=require('path');

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
      updateParticularProject}=require("./../controllers/ProjectsController");

var upload = multer({
  storage:multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,path.join(__dirname,'./../../build/images'));
    },
    filename:function(req,file,callback){
      callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

});

const router=express.Router();
//registration routes
router.route('/Registration/:eventId').get(getRegistrationsWithEventId);
router.route('/Registration').post(upload.single("PaymentScreenshot"),addEventRegistration);
router.route('/Registration').put(upload.single("PaymentScreenshot"),updateRegistrationDetails);
router.route('/Registration/:registrationId').delete(deleteParticularRegistration);
router.route('/Registration/Event/:eventId').delete(deleteAllRegistrationWithEventId);
// router.route('/Registration/paymentStatus').put();

//event routes 

router.route('/Event').get(getAllEvents);
router.route('/Event/:state').get()
router.route('/Event').post(upload.single("EventImage"),addNewEvent);
router.route('/Event/:eventId').delete(deleteParticularEvent);
router.route('/Event').put(updateParticularEvent)
router.route('/Event/changeStatus').put()

//project routes
router.route('/Project/:projectId').get(getProjectWithId);
router.route('/Project').post(addNewProject);
router.route('/Project').put(updateParticularProject);
router.route('/Project/:projectId').delete(deleteParticularProject);

module.exports = router;
