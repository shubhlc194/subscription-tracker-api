import mongoose from "mongoose";
import { DB_URL, NODE_ENV } from "../../config/env.js";   // ✅ must include .js

if (!DB_URL) {
  throw new Error("Please define DB_URL in your env file.");
}

const ConnectToDataBase = async () => {   // ✅ correct function syntax
  try {
    await mongoose.connect(DB_URL);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ Error connecting to database:", error.message);
    process.exit(1);
  }
};

export default ConnectToDataBase;
