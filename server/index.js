
const path=require('path');
const express = require("express");
const userRoutes=require('./routes/userRoutes');
const adminRoutes= require('./routes/adminRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const dotenv=require("dotenv");
const connectDB=require("./config/db");
const morgan=require("morgan");
const fs=require('fs');
const cors=require('cors');
const bodyParser=require('body-parser');

dotenv.config();
const PORT = process.env.BACKEND_PORT || 3001;

const app=express();
app.use("/images",express.static(path.join(__dirname,process.env.IMAGE_STORAGE_DIR_PATH)));

// connectDB();
app.use(cors({
  origin: process.env.FRONTEND_BASE_URI
}))
app.use(express.json());
app.use(morgan('dev'));

// app.use(bodyParser.json());

// for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array());
// app.use(express.static('public'))

app.use(express.static(path.resolve(__dirname,'../build')));

app.get("/api",(req,res) =>{
    res.json({ message: "Hello from server!"});
});
app.use('/api/users',userRoutes);
app.use('/api/admin',adminRoutes);
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../build/')});
  });

app.use((error, req, res, next) => {
    console.log('This is the rejected field ->', error);
  });

app.use(notFound);
// app.use(errorHandler);


// addNewRegistration();

app.listen(PORT,() =>{
    console.log(`server runnig at port ${PORT}`);
});
