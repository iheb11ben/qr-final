require('dotenv').config()
require('express-async-errors')
const cors =require('cors')
const cnx=require('./shared/dbConfig')
const express = require('express')

userRouter=require('./auth/authRouter')
const app =express()
app.use(express.json());
app.use(cors())
const port = process.env.PORT||4000


app.use('/api/v1/',userRouter)
const start = async () => {
    try {
      await cnx(process.env.URL);
      app.listen(port, () => {
        console.log(`connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  start();