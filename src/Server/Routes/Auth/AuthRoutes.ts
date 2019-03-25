import { Router } from 'express';
import * as passport from 'passport';

const route: Router = Router();

route.get('/login', passport.authenticate('auth0', {
    scope: 'openid email profile'
}), (req, res) => {
    res.redirect('/');
});

route.get('/callback', function (req, res, next) {
    passport.authenticate('auth0', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/auth/login'); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            const returnTo = req.session.returnTo;
            delete req.session.returnTo;
            res.redirect(returnTo || '/');
        });
    })(req, res, next);
});
