const mongoose = require("mongoose")
const { options } = require("../routes/products")

const connectDB = (uri) => {
  // console.log("It's working nicely");
  return mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB;