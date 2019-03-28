import mongoose from './../Mongoose';
import { Schema } from 'mongoose';

const BoardSchema = new Schema({
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

const Board = mongoose.model('Board', BoardSchema);

export default Board;
