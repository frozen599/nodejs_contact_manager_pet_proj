import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add contact number"],
        },
        email: {
            type: String,
            required: [true, "Please add email address"]
        },
        phone: {
            type: String,
            required: [true, "Please add contact number"]
        },
    },
    {
        timestamps: true,
    }
);

var Contact =  mongoose.model('Contact', contactSchema);

export { Contact };