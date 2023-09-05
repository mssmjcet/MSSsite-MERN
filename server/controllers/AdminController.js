const fs=require('fs');
const Event = require("../models/EventsSchema");
const Project = require("../models/ProjectsModel");
const Member= require('./../models/MemberSchema');
const asyncHandler=require('express-async-handler');
const path=require('path')

const saveFiles=asyncHandler(async(req,res)=>{
    let eventsData={};
    let projectsData={};
    let teamsData={};

    //save events.json and event images
    eventsData=await Event.find();
      if(!eventsData)
      {
        res.json({
          'message':'save unsuccessful-events.json not saved succesfully'
        });
      }
      else{
        eventsData.map((evt)=>{
          fs.copyFile(path.join(__dirname,'./../'+process.env.IMAGE_UPLOAD_DIR_PATH+'/'+evt.EventImage), './public/images/uploads/'+evt.EventImage, (error) => {
            if (error) { throw error} 
            else { console.log('File has been moved to another folder.')}
          })
        })
        
          fs.writeFile("./public/jsonFiles/events.json",JSON.stringify(eventsData),()=>{
            console.log('data written to events.json');
          });
      }
    
      //save projects.json and project images
      projectsData=await Project.find();
      if(!projectsData)
      {
          res.json({
              'message':'save unsuccessful-projects.json not saved successfully'
          });
      }
      else{          
        projectsData.map((prj)=>{
          fs.copyFile(path.join(__dirname,'./../'+process.env.IMAGE_UPLOAD_DIR_PATH+'/'+prj.Image), './public/images/uploads/'+prj.Image, (error) => {
            if (error) { throw error} 
            else { console.log('File has been moved to another folder.')}
          })
        })  
            fs.writeFile("./public/jsonFiles/projects.json",JSON.stringify(projectsData),()=>{
              console.log('data written to projects.json');
            });
      }

      //save teams.json and team images
      teamsData=await Member.find();
      if(!teamsData)
      {
          res.json({
              'message':'save unsuccessful-teams.json not saved successfully'
          });
      }
      else{          
        teamsData.map((mem)=>{
          fs.copyFile(path.join(__dirname,'./../'+process.env.IMAGE_UPLOAD_DIR_PATH+'/'+mem.ImgUrl), './public/images/uploads/'+mem.ImgUrl, (error) => {
            if (error) { throw error} 
            else { console.log('File has been moved to another folder.')}
          })
        })  
            fs.writeFile("./public/jsonFiles/teams.json",JSON.stringify(teamsData),()=>{
              console.log('data written to teams.json');
            });
      }
    
    res.json({
        'message':'successfully saved'
    });
    
})

module.exports={
    saveFiles
}