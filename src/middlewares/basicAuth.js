import { Buffer } from 'buffer';
import authenticateUser from '../services/authenticateUser.js';

// More details about Basic Auth scheme can be found at: https://datatracker.ietf.org/doc/html/rfc7617
const basicAuth = async (req, res, next) => {
  if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    return res.status(401).json({ message: 'Missing Authorization Header' });
  }

  // Authorization header has the form:
  //     Authorization: Basic abcxya1234....
  // Where the content followed the "Basic" is base64 encoded
  const base64Creds = req.headers.authorization.split(' ')[1]
  const decodedCreds = Buffer.from(base64Creds, 'base64').toString();

  // Credentials has the form: email:password
  const [email, password] = decodedCreds.split(':');

  try {
    const user = await authenticateUser(email, password);
    req.user = user;
  } catch (err) {
    return res.status(401).json({
      message: err.message
    })
  }

  next();
}

export default basicAuth;
