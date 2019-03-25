import * as mongoose from 'mongoose';

mongoose.connect('mongodb://admin:passwordROFL1@ds121996.mlab.com:21996/nexgen');
(<any>mongoose).Promise = global.Promise;

export default mongoose;
