import mongoose from './../Mongoose';
import { Schema } from 'mongoose';

const ModuleSchema = new Schema({
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

const Module = mongoose.model('Module', ModuleSchema);

export default Module;
