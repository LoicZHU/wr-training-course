require('dotenv').config();
// import npm
import * as express from 'express';
import * as cors from 'cors'
import * as morgan from 'morgan'
import * as helmet from 'helmet'

// import
import {connect} from "./db";
import {auth} from "./app/middlewares/auth";
import signInRouter from "./app/router/signup.router";
import loginRouter from "./app/router/login.router";
import courseRouter from "./app/router/course.router";

// server
const app = express();
const HOSTNAME: string = 'localhost';
const PORT = process.env.SERVER_PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json())
app.use(helmet())

process.env.NODE_ENV == 'development'
  ? app.use(morgan('dev'))
  : app.use(morgan('combined'))

// routes
app.use('/signup', signInRouter)
app.use('/api/login', loginRouter);
app.use('/api/courses', courseRouter)

// connect to DB + launch server
export async function start() {
  try {
    await connect();
    app.listen(PORT, () => console.log(`Server listening on: http://${HOSTNAME}:${PORT}`))
  } catch (err) {
    console.error(err)
  }
}