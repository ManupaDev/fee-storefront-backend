import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionString =
      "mongodb+srv://stemlinkonline:B2ue0ykevY5bTRQd@cluster0.3ebkfv2.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(connectionString);
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to the database");
  }
};
