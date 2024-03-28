// require("dotenv").config({path:"/.env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "/.env" });

connectDB();

/*
one way of connecting to MongoDB 
 import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    application.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})(); */
