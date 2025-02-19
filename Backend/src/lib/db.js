import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Ensure .env variables are loaded

export const connectDB = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGODB_URI); // Debugging line
        if (!process.env.MONGODB_URI) {
            throw new Error("MongoDB URI is not defined in .env");
        }
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
};
