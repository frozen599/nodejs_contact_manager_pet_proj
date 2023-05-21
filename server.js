import express from 'express';
import dotenv from 'dotenv';
import contactRouter from './routes/contactRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/contacts", contactRouter);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});