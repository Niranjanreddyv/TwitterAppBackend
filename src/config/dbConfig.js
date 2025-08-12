import mongoose from "mongoose";
import { MONGODB_URL } from "./serverConfig.js";

export default async function connectDB(){
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Connected to mongodb");
    } catch (error) {
        console.log("failed to connect mongodb");
        console.log(error);
        
    }
}