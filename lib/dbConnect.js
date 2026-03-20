import { DB_NAME } from "@/constants";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MongoDB_URL}/${DB_NAME}`,
    );
    console.log(
      "Database connection successful!",
      connectionInstance.connection.host,
      connectionInstance.connection.name,
    );
  } catch (error) {
    console.log("Error occured while initiating DB connection", error);
    process.exit(1);
  }
};
