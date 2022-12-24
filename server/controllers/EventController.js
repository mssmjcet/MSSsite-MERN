const expressAsyncHandler = require("express-async-handler");
const Event = require("./../models/EventsSchema");
var fs = require('fs');


const addNewEvent=expressAsyncHandler(async(req,res)=>{
  let filename='Nil';
  console.log(req.body);
  if(req.file && req.file.filename) filename=req.file.filename;
  const new_Event = new Event({
    Name:req.body.Name,
    Description:req.body.Description,
    StartDate:req.body.StartDate,
    EndDate:req.body.EndDate,
    Time:req.body.Time,
    Duration:req.body.Duration,
    StateOfEvent:req.body.StateOfEvent,
    TypeOfEvent:req.body.TypeOfEvent,
    EventImage:filename,
    PaymentNumber:req.body.PaymentNumber
  });
  new_Event.save();
  res.json({
    message:"Event Created successfully",
  });
});

const getAllEvents=expressAsyncHandler(async(req,res)=>{
Event.find({},function(err,events){
  if(err)
  {
    res.json({
      message:err,
    });
  }
  else{
    res.json({
      message:"success",
      eventsData:events,
    });
  }
});
});


const deleteParticularEvent =expressAsyncHandler (async(req,res)=>{
  Event.findByIdAndDelete({_id:req.params.eventId },function(err,event){
    if(err){
      console.log(err);
      res.json({
        message:err,
      });
    }
    if(event)
    {
    if(fs.existsSync('./build/images/'+event.EventImage))
    {
    fs.unlink('./build/images/'+event.EventImage, function (err) {
      if (err) throw err;
      // if no error, file has been deleted successfully
      console.log('File deleted!');
      res.json({
                message:"Delete Successful",
              });
  });
  }
  else
  {
    res.json({
      message:"Delete Successful (image file already deleted",
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

const updateParticularEvent =expressAsyncHandler(async(req,res) =>{
  let filename='Nil';
  if(req.file && req.file.filename)
  {
    filename=req.file.filename;

  Event.findByIdAndUpdate({_id:req.body.eventId},{$set:{
    Name:req.body.Name,
    Description:req.body.Description,
    StartDate:req.body.StartDate,
    EndDate:req.body.EndDate,
    Time:req.body.Time,
    Duration:req.body.Duration,
    StateOfEvent:req.body.StateOfEvent,
    TypeOfEvent:req.body.TypeOfEvent,
    EventImage:req.body.EventImage,
    PaymentNumber:req.body.PaymentNumber,}},function(err,oldReg){
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
  res.json({
    message:"Event updated successfully",
  });
}
else{
  Event.findByIdAndUpdate({_id:req.body.eventId},{$set:{
    Name:req.body.Name,
    Description:req.body.Description,
    StartDate:req.body.StartDate,
    EndDate:req.body.EndDate,
    Time:req.body.Time,
    Duration:req.body.Duration,
    StateOfEvent:req.body.StateOfEvent,
    TypeOfEvent:req.body.TypeOfEvent,
    EventImage:req.body.EventImage,
    PaymentNumber:req.body.PaymentNumber,}},function(err,event){
        
    });
}
});

const getEventWithId=expressAsyncHandler(async(req,res)=>{
  Event.findById({_id:req.params.eventId},function(err,events){
    if(events)
    {
      res.json({
        'data':events,
      });
    }
  });
});


module.exports = {
  addNewEvent,
  updateParticularEvent,
  deleteParticularEvent,
  getEventWithId,
  getAllEvents
}
