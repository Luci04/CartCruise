import mongoose from "mongoose";

const connectDB = () => {


  try {

    const DBname = process.env.DB_NAME;
    const DBpassword = process.env.DB_PASSWORD;

    mongoose.set('strictQuery', true);

    mongoose.connect(
      process.env.MONGO_URI,
      () => {
        console.log("DB is Connected");
      }
    );

  } catch (err) {
    console.log(`Error : ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
