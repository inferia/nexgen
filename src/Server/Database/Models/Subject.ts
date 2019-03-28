import mongoose from './../Mongoose';
import { Schema } from 'mongoose';

const SubjectSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    user_auth0_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Subject = mongoose.model('Subject', SubjectSchema);

export default Subject;
