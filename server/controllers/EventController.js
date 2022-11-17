const Event = require("./../models/EventsModel");


const addNewEvent=()=>{
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

const getEventWithId=(req,res)=>{
   Event.find({_id:req.params.eventId},function(err,events){
     if(events)
     {
       res.json({
         'data':events,
       })
     }
     // res.render("Registration",{
     //   Allregistrations:registrations,
     // })
   })
}

const deleteParticularEvent = (req,res)=>{
  Event.deleteOne({_id:req.params.eventId },function(err){
    if(err){
      console.log(err);
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
  getEventWithId
}
