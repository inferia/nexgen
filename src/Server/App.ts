import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import passport from './Passport/Passport';
import StdRoutes from './Routes/STD/StdRoutes';
import AuthRoute from './Routes/Auth/AuthRoutes';
import UserRoutes from './Routes/User/UserRoutes';
import BoardRoutes from './Routes/Board/BoardRoutes';
import ModuleRoutes from './Routes/Module/ModuleRoutes';
import SubjectRoutes from './Routes/Subject/SubjectRoutes';

const app: express.Express = express();

let sess: session.SessionOptions = {
    secret: 'wkjlbtge8yq34ht8qnrgf80qht089q3htu9whf089uqwnfiqwncp03rf4n',
    cookie: {
        secure: false
    },
    resave: false,
    saveUninitialized: true
};

app.get('env') === 'production' ? sess.cookie.secure = true : '';

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use('/assets', express.static(
    __dirname + '/../../src/Resources/assets'
));

app.set('views', __dirname + '/../../src/Resources/Views');
app.set('view engine', 'twig');
app.set('twig options', { 
    strict_variables: false
});

app.use('/auth', AuthRoute);
app.use('/std', StdRoutes);
app.use('/user', UserRoutes);
app.use('/board', BoardRoutes);
app.use('/module', ModuleRoutes);
app.use('/subject', SubjectRoutes);

export default app;
