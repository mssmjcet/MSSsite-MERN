const fs=require('fs');
const Event = require("../models/EventsSchema");
const Project = require("../models/ProjectsModel");
const asyncHandler=require('express-async-handler');

const saveFiles=asyncHandler(async(req,res)=>{
    let eventsData={};
    let projectsData={};
     Event.find({},function(err,events){
        
        if(err)
        {
          res.json({
            message:err,
          });
        }
        else{
            eventsData=events;
             Project.find({},(err,projects)=>{
                if(err)
                {
                    res.json({
                        'message':'save unsuccessful'
                    });
                }
                else{          
                    projectsData=projects;
                    fs.writeFile("./public/jsonFiles/events.json",JSON.stringify(eventsData),()=>{
                        console.log('data written to events.json');
                      });
                      fs.writeFile("./public/jsonFiles/projects.json",JSON.stringify(projectsData),()=>{
                        console.log('data written to projects.json');
                      });
                    res.json({
                        'message':'successfully saved'
                    });
                }
              });
              
        }
    });
    
})

module.exports={
    saveFiles
}