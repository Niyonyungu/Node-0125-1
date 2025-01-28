import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DbUrl = process.env.DB_URL

const DbConnection = async () => {
    try {
        await mongoose.connect(DbUrl)
        console.log("connected to Db");
    }
    catch (error) {
        console.error(`Error connecting to the database: ${error.message}`);
        process.exit(1);
    }
}

export default DbConnection;