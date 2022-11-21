const express=require("express");
var multer = require('multer');
const path=require('path');

const {addEventRegistration}=require("../controllers/RegistrationController");
const {deleteParticularRegistration}=require("../controllers/RegistrationController");
const {deleteAllRegistrationWithEventId}=require("../controllers/RegistrationController");
const {getRegistrationsWithEventId}=require("../controllers/RegistrationController");

const {deleteParticularEvent}=require("./../controllers/EventController");
const {updateParticularEvent}=require("./../controllers/EventController");
const {addNewEvent}=require("./../controllers/EventController");
const {getAllEvents}=require("./../controllers/EventController");



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
router.route('/Registration').put();
router.route('/Registration/:registrationId').delete(deleteParticularRegistration);
router.route('/Registration/Event/:eventId').delete(deleteAllRegistrationWithEventId);
router.route('/Registration/paymentStatus').put();

//event routes

router.route('/Event').get(getAllEvents);
router.route('/Event/:state').get()
router.route('/Event').post(addNewEvent);
router.route('/Event/:eventId').delete(deleteParticularEvent);
router.route('/Event').put(updateParticularEvent)
router.route('/Event/changeStatus').put()

//project routes
router.route('/Project').get();
router.route('/Project').post();
router.route('/Project').put();
router.route('/Project/:projectId').delete();

module.exports = router;
