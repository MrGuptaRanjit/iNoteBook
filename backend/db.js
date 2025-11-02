

const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURI = "mongodb+srv://mrguptaranjit:ranjitgupta123@ranjit.mvswbl7.mongodb.net/?retryWrites=true&w=majority&appName=Ranjit"
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    
  }
};

module.exports = connectToMongo;
