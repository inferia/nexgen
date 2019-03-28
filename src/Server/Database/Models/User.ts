import mongoose from './../Mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
    auth0_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

export default User;
