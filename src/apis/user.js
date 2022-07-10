import express from 'express'
import Controller from '../controllers/UserController.js'
import basicAuth from '../middlewares/basicAuth.js';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import passport from '../services/passportGoogleAuth.js';

const router = express.Router();

router.post('/sign_up', Controller.handle('signUp'));
router.post('/sign_in', Controller.handle('signIn'));
router.post('/sign_out', Controller.handle('signOut'));

router.get('/profile', jwtAuth, Controller.handle('profile'));
// router.get('/profile', basicAuth, Controller.handle('profile'));

/**
 * Passport: For signing in with Google OAuth 2.0
 */
router.get('/sign_in/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/oauth2/redirect/accounts.google.com',
  passport.authenticate('google', { failureRedirect: '/sign_in', failureMessage: true }),
  Controller.handle('redirectFromGoogleAuth')
);

export default router;
