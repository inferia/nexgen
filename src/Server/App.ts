import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import passport from './Passport/Passport';

const app: express.Express = express();

let sess: session.SessionOptions = {
    secret: 'CHANGE THIS TO A RANDOM SECRET',
    cookie: {
        secure: false
    },
    resave: false,
    saveUninitialized: true
};

app.get('env') === 'production' ? sess.cookie.secure = true : '';

app.use(cookieParser());
app.use(bodyParser({ extended: false }));
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
