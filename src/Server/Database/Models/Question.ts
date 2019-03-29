import mongoose from './../Mongoose';
import { Schema } from 'mongoose';

const QuestionSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    user_auth0_id: {
        type: String,
        required: true
    },
    board: {
        type: String,
        required: true
    },
    std: {
        type: Number,
        required: true
    },
    module: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    }
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;

