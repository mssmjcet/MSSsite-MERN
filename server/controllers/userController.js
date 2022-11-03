
const asyncHandler=require('express-async-handler');


const addEventRegistration =asyncHandler(async(req,res) => {
    console.log(req.body);
    console.log("reached");
});


module.exports={ addEventRegistration};