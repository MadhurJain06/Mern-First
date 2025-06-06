import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo DB connected: ${conn.connection.host}`)
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1) // 1 code represents exit mit failure, 0 represents success
    }
    
}