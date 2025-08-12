import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import apiRoute from './routes/apiRoute.js'


dotenv.config();


const PORT = process.env.PORT || 3001;

const app = express();

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
})
