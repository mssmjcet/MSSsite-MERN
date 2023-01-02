const Project = require("./../models/ProjectsModel");
const asyncHandler=require('express-async-handler');
var multer = require('multer');


const addNewProject =asyncHandler(async(req,res) => {
    let filename='Nil';
    if(req.file && req.file.filename) filename=req.file.filename;

  const new_Project = new Project({
    Name:req.body.Name,
    Description:req.body.Description,
    ProjectLink:req.body.ProjectLink,
    Image:filename,
  });

  new_Project.save();
    console.log(new_Project);
    console.log("reached");
    res.json({
      status:200,
      message:"New Project added successful",
    });

});

const getProjectWithId=(req,res)=>{
   Project.find({_id:req.params.projectId},function(err,projects){
     if(projects)
     {
       res.json({
         'projectsData':projects,
       })
     }
   })
}


const getAllProjects=(req,res)=>{
  Project.find((err,projects)=>{
    if(projects)
    {
      res.json({
        'projectsData':projects,
      })
    }
  });
}

const deleteParticularProject = (req,res)=>{
  Project.deleteOne({_id:req.params.projectId },function(err){
    if(err){
      console.log(err);
    }
  })
  res.json({
    "message":"deleted successfully"
  })
}

const updateParticularProject = (req,res) =>{
  let filename='Nil';
  if(req.file && req.file.filename)
  {
    filename=req.file.filename;
    Project.updateOne({_id:req.body.projectId},{$set:{
      Name:req.body.Name,
      Description:req.body.Description,
      ProjectLink:req.body.ProjectLink,
      Image:filename,}}).then(result => {
      const { matchedCount, modifiedCount } = result;

    })
    .catch(err => console.error(`Failed to add review: ${err}`));
  }
  else
  {
    Project.updateOne({_id:req.body.projectId},{$set:{
      Name:req.body.Name,
      Description:req.body.Description,
      ProjectLink:req.body.ProjectLink,}}).then(result => {
      const { matchedCount, modifiedCount } = result;

    })
    .catch(err => console.error(`Failed to add review: ${err}`));
  }
  res.json({
    "message":"sucessfully updated"
  })
}




module.exports = {
  addNewProject,
  getProjectWithId,
  deleteParticularProject,
  updateParticularProject,
  getAllProjects
}
