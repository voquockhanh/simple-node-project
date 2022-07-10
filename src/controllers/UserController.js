import * as Models from '../models/index.js'
import dispatch from './dispatcher.js'
import UniqueConstraintError from 'sequelize/lib/errors/validation/unique-constraint-error.js';
import authenticateUser from '../services/authenticateUser.js';
import { jwtSign } from '../middlewares/jwtAuth.js';

class UserController {
  constructor (req, res, next) {
    this.req = req
    this.res = res
    this.next = next
  }

  static handle (action) {
    return dispatch(UserController, action)
  }

  async signUp () {
    try {
      const newUser = {
        name: this.req.body.name,
        email: this.req.body.email,
        password: String(this.req.body.password),
      }

      if (!newUser.password) {
        return this.res.status(400).json({
          message: 'Password must be supplied'
        });
      }

      // TODO: Should check email format validation here, email-validator is a good package to do that

      await Models.User.create(newUser)

      this.res.send("ok")
    } catch (err) {
      if (err instanceof UniqueConstraintError) {
        this.res.status(400).json({
          message: 'Your email is already signed up, please login instead'
        })
      } else {
        this.next(err)
      }
    }
  }

  async signIn () {
    try {
      const [email, password] = [this.req.body.email, this.req.body.password];
      const user = await authenticateUser(email, password);
      const encoded = await jwtSign({ userId: user.id });

      this.req.session.token = encoded;

      return this.res.send('ok');
    } catch (err) {
      return this.res.status(401).json({
        message: err.message
      })
    }
  }

  async redirectFromGoogleAuth () {
    try {
      const encoded = await jwtSign({ userId: this.req.user.id });
      this.req.session.token = encoded;
      return this.res.send('ok');
    } catch (err) {
      return this.res.status(401).json({
        message: err.message
      })
    }
  }

  async signOut () {
    try {
      this.req.session = null;
      return this.res.send('ok');
    } catch (err) {
      this.next(err)
    }
  }

  async profile () {
    this.res.send(this.req.user);
  }

}

export default UserController