import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import config from '../config.js'
import * as Models from '../models/index.js';
import _ from 'lodash';

 passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: config['GOOGLE_CLIENT_ID'],
  clientSecret: config['GOOGLE_CLIENT_SECRET'],
  callbackURL: "http://localhost:5000/users/oauth2/redirect/accounts.google.com"
},
  async function (accessToken, refreshToken, profile, cb) {
    const email = _.get(profile, 'emails[0].value')
    if (!email) { return cb(new Error('Email not found')); }

    const user = await Models.User.findOne({ where: { email: email } });
    return cb(null, { id: user.id });
  }
));

export default passport;
