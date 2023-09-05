const express=require("express");
const { addEventRegistration} = require("../controllers/RegistrationController");
const { getAllEvents } = require("../controllers/EventController");
const { getAllProjects } = require("../controllers/ProjectsController");
const { getAllMembers } = require("../controllers/TeamsController");
const router=express.Router();


//registration routes

router.post("/Registration",addEventRegistration);

//event routes

router.route('/Event').get(getAllEvents);
// router.route('/Event/:state').get()

//project routes
router.route('/Project').get(getAllProjects);

//team routes
router.route('/Team').get(getAllMembers);

module.exports = router;
