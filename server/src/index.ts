import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/user';
import { productRouter } from './routes/product';

const app = express()

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRouter);

mongoose.connect("mongodb+srv://tanvidevasthali247:ecommerce@ecommerce.xrqakx5.mongodb.net/ecommerce");

app.listen (3001, () => console.log("SERVER STARED"));