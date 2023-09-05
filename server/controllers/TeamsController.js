const Member = require("./../models/MemberSchema");
const asyncHandler=require('express-async-handler');
const upload = require("../middlewares/upload");


const addNewMember =asyncHandler(async(req,res) => {
  try{  
    let filename='Nil';
    await upload(req,res);

    if(req.files.length>0 && req.files[0].filename) filename=req.files[0].filename;

    let newMemberData={
      Name:req.body.Name,
      PositionName:req.body.PositionName,
      PositionType:req.body.PositionType,
      ImgUrl:filename,
    }

      const new_Member = new Member(newMemberData);
      new_Member.save();
      
      console.log(new_Member);
      console.log("reached");
    
      res.json({
        status:200,
        message:"New Member added successful",
      });
  }
  catch(error){
    console.log(error);
  }
});

const getMemberWithId=asyncHandler(async(req,res)=>{
   Member.find({_id:req.params.memberId},function(err,member){
     if(member)
     {
       res.json({
         'memberData':member,
       })
     }
   })
});


const getAllMembers=asyncHandler(async(req,res)=>{
  Member.find((err,members)=>{
    if(members)
    {
      res.json({
        'membersData':members,
      })
    }
  });
});

const deleteParticularMember = asyncHandler(async(req,res)=>{
  Member.deleteOne({_id:req.params.memberId },function(err){
    if(err){
      console.log(err);
    }
  })
  res.json({
    "message":"deleted successfully"
  })
});

const updateParticularMember = asyncHandler(async(req,res) =>{
  try{
    await upload(req,res);
    // console.log('members controller')
    console.log(req.body)
    let updateBlock={
      Name:req.body.Name,
      PositionName:req.body.PositionName,
      PositionType:req.body.PositionType,
    }
    
    if(req.files.length>0 && req.files[0].filename)
    {
      updateBlock['ImgUrl']=req.files[0].filename;
    }

     await Member.updateOne({_id:req.body.memberId},updateBlock).then(result => {
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
  addNewMember,
  getMemberWithId,
  deleteParticularMember,
  updateParticularMember,
  getAllMembers
}
