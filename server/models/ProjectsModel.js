const mongoose=require('mongoose');


const ProjetSchema = new mongoose.Schema({
  Name:String,
  Description:String,
  Image:String,
  ProjectLink:String,
});

const Project = mongoose.model("Project", ProjetSchema);


module.exports = Project;
