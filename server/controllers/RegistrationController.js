
const Registration = require("./../models/registrationSchema");
const asyncHandler=require('express-async-handler');
var multer = require('multer');
var fs = require('fs');


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

const getRegistrationsWithEventId=asyncHandler(async(req,res)=>{


   Registration.find({eventID:req.params.eventId},function(err,registrations){
     if(registrations)
     {
       res.json({
         'regData':registrations,
       })
     }
   })
});

const deleteParticularRegistration = asyncHandler(async(req,res)=>{
   Registration.findByIdAndDelete({_id:req.params.registrationId},function(err,registration){
    if(err)
    {
    res.json({
        message:err,
      });
    }
    if(registration)
    {
    if(fs.existsSync('./build/images/'+registration.paymentFile))
    {
    fs.unlink('./build/images/'+registration.paymentFile, function (err) {
      if (err) throw err;
      // if no error, file has been deleted successfully
      console.log('File deleted!');
      res.json({
                message:"Delete Successful",
              });
  });
  }
    }
    else
    {
        res.json({
        message:"not found",
      });
    }
  });
});

const deleteAllRegistrationWithEventId = asyncHandler(async(req,res)=>{

  Registration.find({eventID:req.params.eventId},function(err,registrations){
    if(registrations)
    {
      registrations.map((reg)=>{
        if(fs.existsSync('./build/images/'+reg.paymentFile))
        {
        fs.unlink('./build/images/'+reg.paymentFile, function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          console.log('File deleted!');
      });
    }
      })
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
  })
});

const updateRegistrationDetails=asyncHandler(async(req,res)=>{
  let filename='Nil';
  if(req.file && req.file.filename)
  {
    filename=req.file.filename;
    Registration.findByIdAndUpdate({_id:req.body.registrationId},{$set:{
      eventID:req.body.EventId,
    nameOfParticipant:req.body.Name,
    emailId:req.body.EmailId,
    phoneNumber:req.body.PhoneNo,
    rollNumber:req.body.RollNo,
    paymentStatus:req.body.PaymentStatus,
    paymentFile:filename,}},function(err,oldReg){
      if(fs.existsSync('./build/images/'+oldReg.paymentFile))
        {
        fs.unlink('./build/images/'+oldReg.paymentFile, function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          console.log('File deleted!');
      });
    }
    })
    .catch(err => console.error(`Failed to add review: ${err}`));
  }
  else
  {
    Registration.updateOne({_id:req.body.registrationId},{$set:{
      eventID:req.body.EventId,
    // eventName:req.body.Name,
    nameOfParticipant:req.body.Name,
    emailId:req.body.EmailId,
    phoneNumber:req.body.PhoneNo,
    rollNumber:req.body.RollNo,
    paymentStatus:req.body.PaymentStatus,}}).then(result => {
      const { matchedCount, modifiedCount } = result;

    })
    .catch(err => console.error(`Failed to add review: ${err}`));
  }
  res.json({
    status:200,
    message:"update successful",
  });
});


module.exports = {
  getRegistrationsWithEventId,
  deleteParticularRegistration,
  deleteAllRegistrationWithEventId,
  addEventRegistration,
  updateRegistrationDetails
}
