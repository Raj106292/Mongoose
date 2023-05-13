import express, { Application } from 'express';
import cors from 'cors';
import userRouter from './app/modules/user/user.route';

const app: Application = express();
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRouter);

export default app;