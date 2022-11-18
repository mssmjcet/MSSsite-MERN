const mongoose=require('mongoose');


const EventSchema = new mongoose.Schema({
  Name:String,
  Description:String,
  StartDate:String,
  EndDate:String,
  Time:String,
  Duration:String,
  StateOfEvent:String,
  TypeOfEvent:String,
  EventImage:String,
  PaymentNumber:String,
});

const Event = mongoose.model("Event", EventSchema);


module.exports  =   Event;
