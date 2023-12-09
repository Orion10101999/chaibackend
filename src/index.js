// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import express from 'express';
import connectDB from './db/index.js';
const app = express()
dotenv.config({path:'./env'})
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is Running at port : ${process.env.PORT}`);
  })
  app.on("error",(error)=>{
    console.log("ERRR", error);
    throw error
  })
})
.catch((err)=>{
  console.log("MongoDB connection Failed",err);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('hitesh dot com')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>chai aur code Youtube </h2>')
})

