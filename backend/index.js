import express from "express";
import  dotenv from "dotenv";
import restaurantRoute from "./routes/restaurantRoute.js";
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser";
import  userRoute from "./routes/userRoute.js"
dotenv.config();
const app=express();
app.use(express.json())
app.use(cookieParser());
const PORT = process.env.PORT;
app.use("/api/auth",userRoute);
 app.use("/api/restaurants",restaurantRoute);

 app.listen(PORT,()=>{
      console.log(`server running at ${PORT}`)
      connectDB();
 })