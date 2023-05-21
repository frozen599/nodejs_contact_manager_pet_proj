import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {contactRouter} from './routes/contactRoutes.js';
import { errHandler } from './middlewares/errorHandler.js';

dotenv.config();
bodyParser.json();
bodyParser.urlencoded({extended: false})

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/contacts", contactRouter);

app.use(errHandler);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});