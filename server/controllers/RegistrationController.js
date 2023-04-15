
const Registration = require("./../models/registrationSchema");
const asyncHandler=require('express-async-handler');
var multer = require('multer');
var fs = require('fs');
const upload=require('./../middlewares/upload');
const storagePath="./../storage/images/uploaded"


const addEventRegistration =asyncHandler(async(req,res) => {
    try{
        await upload(req,res);
        console.log(req.files);
        
        let filename='Nil';
        if(req.files.length>0 && req.files[0].filename) filename=req.files[0].filename;
        console.log(filename);
        
        let newRegData={
          eventID:req.body.EventId,
          // eventName:req.body.Name,
          nameOfParticipant:req.body.Name,
          emailId:req.body.EmailId,
          phoneNumber:req.body.PhoneNo,
          rollNumber:req.body.RollNo,
          paymentStatus:req.body.PaymentStatus,
          paymentFile:filename,
        }

        const new_Registration = new Registration(newRegData);

        new_Registration.save();
        console.log(new_Registration);
        console.log("reached");
        res.json({
          status:200,
          message:"registration successful",
        });
    }
    catch(error){
      console.log(error);
      res.json({
        status:500,
        message:"error occurred:"+error,
      });
    }

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
    if(fs.existsSync(storagePath+registration.paymentFile))
    {
    fs.unlink(storagePath+registration.paymentFile, function (err) {
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
        if(fs.existsSync(storagePath+reg.paymentFile))
        {
        fs.unlink(storagePath+reg.paymentFile, function (err) {
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
  try{
    let filename='Nil';
    await upload(req,res);

    let updateBlock={
      eventID:req.body.EventId,
      nameOfParticipant:req.body.Name,
      emailId:req.body.EmailId,
      phoneNumber:req.body.PhoneNo,
      rollNumber:req.body.RollNo,
      paymentStatus:req.body.PaymentStatus,
    };

    if(req.files.length>0 && req.files[0].filename)
    {
      filename=req.files[0].filename;
      updateBlock['paymentFile']=filename;
    }
    
      Registration.findByIdAndUpdate({_id:req.body.registrationId},{$set:updateBlock},function(err,oldReg){
        
        if(filename!=='Nil' && fs.existsSync(storagePath+oldReg.paymentFile))
          {
          fs.unlink(storagePath+oldReg.paymentFile, function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            console.log('File deleted!');
        });
      }
      })
      .catch(err => console.error(`Failed to add review: ${err}`));

    res.json({
      status:200,
      message:"update successful",
    });
  }
  catch(error){
    console.log(error);
    res.json({
      status:500,
      message:"error occurred:"+error,
    });
  }
});


module.exports = {
  getRegistrationsWithEventId,
  deleteParticularRegistration,
  deleteAllRegistrationWithEventId,
  addEventRegistration,
  updateRegistrationDetails
}
