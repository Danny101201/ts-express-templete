import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import morgan from "morgan"
import ExampleRouter from "./routes/exampleRouter"
import { errorHandler } from './middleware/errorMiddle'
//env
import { port, DB } from './config/index'
const app = express();


//middleware 
app.use(errorHandler)
app.use(express.json())
app.use(morgan('tiny'))

//router routes
app.use('/', ExampleRouter)

app.use(() => {
  throw createHttpError('404', 'Route not found')
})
mongoose.connect(DB)
  .then(() => {
    app.listen(port, () => {
      console.log(`server run on port : ${port}`);
    });
  }).catch(err => {
    throw createHttpError('500', 'Unable to connect to database')
  })
