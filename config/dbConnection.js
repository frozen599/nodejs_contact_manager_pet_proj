import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connection: ', connect.connection.host);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

export { connectDB };