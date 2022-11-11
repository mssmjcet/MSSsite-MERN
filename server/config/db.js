const mongoose=require('mongoose');

const connectDB=mongoose.connect("mongodb+srv://SyedMohammedQuadri:Ab13579@cluster0.nhva0zg.mongodb.net/MsterDB");


module.exports = connectDB;
