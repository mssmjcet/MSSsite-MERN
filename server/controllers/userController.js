
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
    console.log(req.file.filename);
  const new_Registration = new Registration({
    eventID:req.body.EventId,
    // eventName:req.body.Name,
    nameOfParticipant:req.body.Name,
    emailId:req.body.EmailId,
    phoneNumber:req.body.PhoneNo,
    rollNumber:req.body.RollNo,
    paymentFile:req.file.filename,
  });

  new_Registration.save();



    console.log(req.body);
    console.log("reached");
});


module.exports={ addEventRegistration};
