
const Registration = require("./../models/registrationSchema");
const addNewRegistration=()=>{

  const new_Registration = new Registration({
    eventID:1,
    eventName:"imagine hack",
    nameOfParticipant:"Quadri",
    emailId:"syed.moh09@gmail.com",
    phoneNumber:9949655223,
    rollNumber:160420733654,
  });
  new_Registration.save();
};

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
  addNewRegistration,
  getRegistrationsWithEventId,
  deleteParticularRegistration,
  deleteAllRegistrationWithEventId
}
