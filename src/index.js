import express from 'express';
import DbConnection from './database/config/connection';
import dotenv from "dotenv";
import userRouter from './routes/userRoutes';
import authRouter from './routes/authRoutes';
import productRouter from './routes/productRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Connecting Routes to the App 

app.use("/api", userRouter)
app.use("/api", authRouter)
app.use("/api", productRouter)



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
