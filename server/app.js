import  express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
//import dotenv from "dotenv";

import postRouter from './routes/posts.js';

const app = express();

app.use('/', postRouter);

app.use('/', postRouter);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/*
dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,
    () =>{
    console.log('connected to the database');
});
*/

const DB_CONNECT = 'mongodb://127.0.0.1:27017/memories';
const PORT = process.env.PORT || 5000;
mongoose.connect( DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log('running')))
.catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);

