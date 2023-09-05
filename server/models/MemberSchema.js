const mongoose=require('mongoose');


const MemberSchema = new mongoose.Schema({
  Name:String,
  PositionName:String,
  PositionType:String,
  ImgUrl:String,
});

const Member = mongoose.model("Member", MemberSchema);


module.exports = Member;
