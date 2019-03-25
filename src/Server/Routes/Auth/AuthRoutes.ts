import { Router } from 'express';
import * as passport from 'passport';

const AuthRoute: Router = Router();

AuthRoute.get('/login', passport.authenticate('auth0', {
    scope: 'openid email profile'
}), (req, res) => {
    res.redirect('/');
});

AuthRoute.get('/callback',  (req, res, next) => {
    passport.authenticate('auth0', (err, user, info)  => {
        if (err) return next(err);
        if (! user) return res.redirect('/auth/login');

        req.logIn(user, err => {
            if (err) return next(err);

            const returnTo = req.session.returnTo;
            delete req.session.returnTo;

            res.redirect(returnTo || '/');
        });
    })(req, res, next);
});

export default AuthRoute;
