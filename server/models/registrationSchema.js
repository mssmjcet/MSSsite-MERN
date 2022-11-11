const mongoose=require('mongoose');


const registrationSchema = new mongoose.Schema({
  eventID:String,
  // eventName:String,
  nameOfParticipant:String,
  emailId:String,
  phoneNumber:String,
  rollNumber:Number,
  paymentStatus:String,
  paymentFile:String,
});

const Registration = mongoose.model("Registration", registrationSchema);


module.exports =   Registration;
