import * as dotenv from 'dotenv';

dotenv.config();

import * as passport from 'passport';
import * as Auth0Strategy from 'passport-auth0';

// @ts-ignore
const strategy: passport.Strategy = new Auth0Strategy(
    {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL:
          process.env.AUTH0_CALLBACK_URL || 'http://localhost:8080/callback'
    },
    (
        accessToken: string,
        refreshToken: string,
        extraParams, 
        profile: passport.Profile, 
        done: CallableFunction
    ) => done(null, profile)
);

passport.use(strategy);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

export default passport;
