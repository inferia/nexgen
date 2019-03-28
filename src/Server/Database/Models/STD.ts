import mongoose from './../Mongoose';
import { Schema } from 'mongoose';

const STDSchema = new Schema({
	user_id: {
		type: String,
		required: true
	},
	user_auth0_id: {
		type: String,
		required: true
	},
	name: {
		type: Number,
		required: true
	}
});

const STD = mongoose.model('STD', STDSchema);

export default STD;
