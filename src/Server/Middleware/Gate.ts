import * as express from 'express';

export const allowOnlyUsers = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    if (req.user) return next();

    req.session.returnTo = req.originalUrl;
    res.redirect('/auth/login');
};

export const allowOnlyGuests = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    if (req.user) { return res.redirect('/user/dashboard') }

    next();
};
