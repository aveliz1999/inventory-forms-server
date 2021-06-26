import express from 'express';
import cookieParser from 'cookie-parser';
import usersRouter from "./routes/users";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/users', usersRouter);

export default app;