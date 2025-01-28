import express from 'express';
import DbConnection from './database/config/connection.js';
import dotenv from "dotenv";
import userRouter from './routes/userRoutes.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/", userRouter)

app.get("/", (req, res) => {
    res.status(404).json({
        message: 'Back End setted successfully!',
    });
})
app.use((req, res) => {
    res.status(404).json({
        message: 'Endpoint not found. Please check the URL very well!',
    });
});


const port = process.env.PORT || 3000;

DbConnection().then(() => {
    app.listen(port, () => { console.log(`Server is Running at http://localhost:${port}`) }
    );
    
}).catch(err => console.log("Error occured:", err));
