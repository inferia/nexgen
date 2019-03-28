import * as dotenv from 'dotenv';
import User from '../Database/Models/User';

dotenv.config();

import { isNull } from 'util';
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
    ) => {
        //@ts-ignore
        User.where('auth0_id', profile.id)
            .findOne()
            .then(res => {
                if (! isNull(res)) {
                    return done(null, {...profile, _id: res._id});
                }

                User.create({
                    auth0_id: profile.id,
                    //@ts-ignore
                    email: profile._json.email,
                    //@ts-ignore
                    picture: profile._json.picture,
                    //@ts-ignore
                    username: profile._json.nickname
                }).then(document => done(null, {...profile, _id: document._id}))
                .catch(console.log);
            })
            .catch(console.log)
    }
);

passport.use(strategy);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

export default passport;
