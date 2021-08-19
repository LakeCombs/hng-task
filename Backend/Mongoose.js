const mongoose = require("mongoose");
const uri = process.env.uri;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    mongoose.connection
      .once("open", () => {
        console.log("connected to data base successfullly");
      })
      .on("error", () => {
        console.log("error connecting to database");
      });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
