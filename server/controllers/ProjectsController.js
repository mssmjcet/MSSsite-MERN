const Project = require("./../models/ProjectsModel");
const asyncHandler=require('express-async-handler');
const upload = require("../middlewares/upload");


const addNewProject =asyncHandler(async(req,res) => {
  try{  
    let filename='Nil';
    await upload(req,res);

    if(req.files.length>0 && req.files[0].filename) filename=req.files[0].filename;

    let newProjData={
      Name:req.body.Name,
      Description:req.body.Description,
      ProjectLink:req.body.ProjectLink,
      Image:filename,
    }

      const new_Project = new Project(newProjData);
      new_Project.save();
      
      console.log(new_Project);
      console.log("reached");
    
      res.json({
        status:200,
        message:"New Project added successful",
      });
  }
  catch(error){
    console.log(error);
  }
});

const getProjectWithId=asyncHandler(async(req,res)=>{
   Project.find({_id:req.params.projectId},function(err,projects){
     if(projects)
     {
       res.json({
         'projectsData':projects,
       })
     }
   })
});


const getAllProjects=asyncHandler(async(req,res)=>{
  Project.find((err,projects)=>{
    if(projects)
    {
      res.json({
        'projectsData':projects,
      })
    }
  });
});

const deleteParticularProject = asyncHandler(async(req,res)=>{
  Project.deleteOne({_id:req.params.projectId },function(err){
    if(err){
      console.log(err);
    }
  })
  res.json({
    "message":"deleted successfully"
  })
});

const updateParticularProject = asyncHandler(async(req,res) =>{
  try{
    await upload(req,res);
    console.log('projects controller')
    console.log(req.body)
    let updateBlock={
      Name:req.body.Name,
      Description:req.body.Description,
      ProjectLink:req.body.ProjectLink,
     
    }
    
    if(req.files.length>0 && req.files[0].filename)
    {
      updateBlock['Image']=req.files[0].filename;
    }

     await Project.updateOne({_id:req.body.projectId},updateBlock).then(result => {
        const { matchedCount, modifiedCount } = result;
      })
      .catch(err => console.error(`Failed to add review: ${err}`));
    
    res.json({
      "message":"sucessfully updated"
    })
  }
  catch(error){
    console.log(error);
  }
});




module.exports = {
  addNewProject,
  getProjectWithId,
  deleteParticularProject,
  updateParticularProject,
  getAllProjects
}
