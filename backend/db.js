// const mongoose = require('mongoose');


 //const mongoURI = "mongodb+srv://mrguptaranjit:ranjitgupta123@ranjit.mvswbl7.mongodb.net/?retryWrites=true&w=majority&appName=Ranjit"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI , ()=>{
//         console.log("Connected to Mongo")
//     })
// }

// module.exports = connectToMongo;

const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://mrguptaranjit:ranjitgupta123@ranjit.mvswbl7.mongodb.net/?retryWrites=true&w=majority&appName=Ranjit"


const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    
  }
};

module.exports = connectToMongo;
