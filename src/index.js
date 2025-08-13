import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import apiRoute from './routes/apiRoute.js'
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';
import cors from 'cors'

const app = express();

app.use(cors({
  origin: "http://localhost:5173",  // Your frontend dev server
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}))


app.use(morgan('combined'))
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended : true}));

app.use('/api', apiRoute);



app.use('/', (req,res)=>{
    return res.json({
        message : "hii"
    })
})

app.listen(3000, ()=>{
    console.log(`server is running on port ${PORT}`)
    connectDB();
})
