import express from 'express';
import DbConnection from './database/connection.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());


const port = process.env.PORT || 3000;

DbConnection().then(() => {
    app.listen(port, () => { console.log(`Server is Running at http://localhost:${port}`) }
    );
    
}).catch(err => console.log("Error occured:", err));
