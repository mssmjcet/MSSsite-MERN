
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

module.exports = {
  addNewRegistration
}
