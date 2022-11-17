
const Registration = require("./../models/registrationSchema");
const asyncHandler=require('express-async-handler');
var multer = require('multer');


const addEventRegistration =asyncHandler(async(req,res) => {

    let filename='Nil';
    if(req.file && req.file.filename) filename=req.file.filename;

  const new_Registration = new Registration({
    eventID:req.body.EventId,
    // eventName:req.body.Name,
    nameOfParticipant:req.body.Name,
    emailId:req.body.EmailId,
    phoneNumber:req.body.PhoneNo,
    rollNumber:req.body.RollNo,
    paymentStatus:req.body.PaymentStatus,
    paymentFile:filename,
  });

  new_Registration.save();
    console.log(new_Registration);
    console.log("reached");
    res.json({
      status:200,
      message:"registration successful",
    });

});

const getRegistrationsWithEventId=(req,res)=>{


   Registration.find({eventID:req.params.eventId},function(err,registrations){
     if(registrations)
     {
       res.json({
         'regData':registrations,
       })
     }
   })
}

const deleteParticularRegistration = (req,res)=>{
  Registration.deleteOne({_id:req.params.registrationId},function(err){
    if(err){
      console.log(err);
      res.json({
        message:err,
      });
    }
    else
    {
      res.json({
        message:"Delete Successful",
      });
    }
  })
}

const deleteAllRegistrationWithEventId = (req,res)=>{

  Registration.deleteMany({ eventID: req.params.eventId }, function(err, result) {
    if (err) {
      console.log(err);
      res.json({
        message:err,
      });
    }
    else{
      res.json({
        message:"Delete all registrations successful",
      })
    }
  });

}




module.exports = {
  getRegistrationsWithEventId,
  deleteParticularRegistration,
  deleteAllRegistrationWithEventId,
  addEventRegistration
}
