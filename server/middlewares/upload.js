var multer = require('multer');
var path=require('path')
var util=require('util');
var upload = multer({
  storage:multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,path.join(__dirname,'./../'+process.env.IMAGE_UPLOAD_DIR_PATH));
    },
    filename:function(req,file,callback){
      callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

}).any();
// .single("PaymentScreenshot");

// var uploadFiles = multer({ storage: storage })
// var uploadFilesMiddleware = util.promisify(uploadFiles);
var uploadFilesMiddleware = util.promisify(upload);
module.exports = uploadFilesMiddleware;