const mongoose=require('mongoose');

// const connectDB=mongoose.connect("mongodb+srv://SyedMohammedQuadri:Ab13579@cluster0.nhva0zg.mongodb.net/MsterDB");

const connectDB=mongoose.connect("mongodb://127.0.0.1:27017/mssDb");

module.exports = connectDB;
