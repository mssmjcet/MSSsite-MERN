
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


   Registration.find({eventID:1},function(err,registrations){
     if(registrations)
     {
       res.json({
         'data':registrations,
       })
     }
     // res.render("Registration",{
     //   Allregistrations:registrations,
     // })
   })

}

module.exports = {
  addNewRegistration,
  getRegistrationsWithEventId
}
