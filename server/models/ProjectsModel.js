const mongoose=require('mongoose');


const ProjectSchema = new mongoose.Schema({
  Name:String,
  Description:String,
  Image:String,
  ProjectLink:String,
});

const Project = mongoose.model("Project", ProjectSchema);


module.exports = Project;
