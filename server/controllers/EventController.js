const Event = require("./../models/EventsSchema");


const addNewEvent=(req,res)=>{
  const new_Event = new Event({
    Name:req.body.Name,
    Description:req.body.Description,
    StartDate:req.body.StartDate,
    EndDate:req.body.EndDate,
    Time:req.body.Time,
    Duration:req.body.Duration,
    StateOfEvent:req.body.StateOfEvent,
    TypeOfEvent:req.body.TypeOfEvent,
    EventImage:req.body.EventImage,
    PaymentNumber:req.body.PaymentNumber
  });
  new_Event.save();
};

const getAllEvents=(req,res)=>{
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
})
}

const getEventWithId=(req,res)=>{
   Event.find({_id:req.params.eventId},function(err,events){
     if(events)
     {
       res.json({
         'data':events,
       });
     }
   })
}

const deleteParticularEvent = (req,res)=>{
  Event.deleteOne({_id:req.params.eventId },function(err){
    if(err){
      console.log(err);
      res.json({
        message:err,
      });
    }
    else
    {
      res.json({
        message:"delete successful",
      });
    }
  })
}

const updateParticularEvent = (req,res) =>{
  Event.updateOne({_id:req.body.eventId},{$set:{
    Name:req.body.Name,
    Description:req.body.Description,
    StartDate:req.body.StartDate,
    EndDate:req.body.EndDate,
    Time:req.body.Time,
    Duration:req.body.Duration,
    StateOfEvent:req.body.StateOfEvent,
    TypeOfEvent:req.body.TypeOfEvent,
    EventImage:req.body.EventImage,
    PaymentNumber:req.body.PaymentNumber,}}).then(result => {
    const { matchedCount, modifiedCount } = result;

  })
  .catch(err => console.error(`Failed to add review: ${err}`));
}




module.exports = {
  addNewEvent,
  updateParticularEvent,
  deleteParticularEvent,
  getEventWithId,
  getAllEvents
}
