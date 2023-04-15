const expressAsyncHandler = require("express-async-handler");
const Event = require("./../models/EventsSchema");
var fs = require('fs');
const upload=require('./../middlewares/upload');
const storagePath="./../storage/images/uploaded"

const addNewEvent=expressAsyncHandler(async(req,res)=>{
  try{
    let filename='Nil';
    await upload(req,res);

    console.log(req.files);
    if(req.files.length>0 && req.files[0].filename) filename=req.files[0].filename;
    
    let newEvtData={
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
    };

    const new_Event = new Event(newEvtData);
    new_Event.save();
    res.json({
      message:"Event Created successfully",
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
  try{
    let filename='Nil';
    await upload(req,res);
    console.log(req.body.Name);
    
    let updateBlock={
      Name:req.body.Name,
      Description:req.body.Description,
      StartDate:req.body.StartDate,
      EndDate:req.body.EndDate,
      Time:req.body.Time,
      Duration:req.body.Duration,
      StateOfEvent:req.body.StateOfEvent,
      TypeOfEvent:req.body.TypeOfEvent,
      PaymentNumber:req.body.PaymentNumber
    };

    if(req.files.length>0 && req.files[0].filename)
    {
      filename=req.files[0].filename;
      updateBlock['EventImage']=filename;
    }
      
    Event.findByIdAndUpdate({_id:req.body.eventId},{$set:updateBlock},function(err,oldEvt){
        
      if(filename!=='Nil' && fs.existsSync('./build/images/'+oldEvt.EventImage))
          {
          fs.unlink('./build/images/'+oldEvt.EventImage, function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
      }
      })
    .catch(err => console.error(`Failed to add review: ${err}`));
    res.json({
      message:"Event updated successfully",
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
