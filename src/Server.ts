import cookieParser from 'cookie-parser';
import express from 'express';
//import { BAD_REQUEST } from 'http-status-codes';
//import BaseRouter from './routes';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
// Add APIs
//app.use('/api', BaseRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

// Export express instance
export default app;