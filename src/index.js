// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import express from 'express';
import connectDB from './db/index.js';
const app = express()
dotenv.config({path:'./env'})
connectDB()

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


app.listen(process.env.PORT || 3200, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
