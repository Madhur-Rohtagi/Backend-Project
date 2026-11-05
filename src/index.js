// require('dotenv').config({path: './env'});
import dotenv from "dotenv"
// import 'dotenv/config'
import connectDB from './db/index.js';

dotenv.config({path: './.env'});

connectDB();

























/*
import express from 'express';
const app = express();

(async function connectDB() {
    try{
        await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
        app.on("error",(err)=>{
            console.error("ERROR: ",err );
            throw err;
        });
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }catch(err){
        console.error("ERROR: ",err );
        throw err;
    }
})()
*/
