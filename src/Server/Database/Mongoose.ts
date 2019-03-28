import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
(<any>mongoose).Promise = global.Promise;

export default mongoose;
