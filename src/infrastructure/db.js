import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionString =
      process.env.DATABASE_URL;
    await mongoose.connect(connectionString);
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to the database");
  }
};
