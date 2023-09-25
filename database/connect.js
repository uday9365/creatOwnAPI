const mongoose = require("mongoose")
const { options } = require("../routes/products")

uri = "mongodb+srv://uday:5so8H7qZFV7aCcjE@udayapi.vsfoz9c.mongodb.net/UdayAPI?retryWrites=true&w=majority"

const connectDB = () => {
  // console.log("It's working nicely");
  return mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB;