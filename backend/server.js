import express from 'express';
import  'dotenv/config';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();



// Middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


//API Endpoints
app.get('/', (req,res)=>{
    res.status(200).send('Hello from Backend');
    console.log('Server is running');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
