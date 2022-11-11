
const asyncHandler=require('express-async-handler');
const Registration = require("./../models/registrationSchema");
var multer = require('multer');


const addEventRegistration =asyncHandler(async(req,res) => {

  var upload = multer({
    storage:multer.diskStorage({
      destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'./../../uploads'));
      },
      filename:function(req,file,callback){
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })

  });
    let filename='Nil';
    if(req.file && req.file.filename) filename=req.file.filename;
    
  const new_Registration = new Registration({
    eventID:req.body.EventId,
    // eventName:req.body.Name,
    nameOfParticipant:req.body.Name,
    emailId:req.body.EmailId,
    phoneNumber:req.body.PhoneNo,
    rollNumber:req.body.RollNo,
    paymentStatus:req.body.PaymentStatus,
    paymentFile:filename,
  });

  new_Registration.save();



    console.log(new_Registration);
    console.log("reached");
    res.json({
      status:200,
      message:"registration successful",
    });
    
});


module.exports={ addEventRegistration};
