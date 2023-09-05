const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();

const connectDB=mongoose.connect(process.env.MONGO_URI);
// const connectDB=mongoose.connect("mongodb://127.0.0.1:27017/MssDB");

module.exports = connectDB;

