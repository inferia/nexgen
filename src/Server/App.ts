import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import passport from './Passport/Passport';
import AuthRoute from './Routes/Auth/AuthRoutes';

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

app.set('views', __dirname + '/../../src/Resources/Views');
app.set('view engine', 'twig');
app.set('twig options', { 
    strict_variables: false
});

app.use('/auth', AuthRoute);

export default app;
