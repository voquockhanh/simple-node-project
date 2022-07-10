import config from '../config.js'
import Jwt from 'jsonwebtoken';

// More details about Basic Auth scheme can be found at: https://datatracker.ietf.org/doc/html/rfc7617
const jwtAuth = async (req, res, next) => {
  const token = req.session.token;
  let decoded = null;

  if (!token) {
    return res.status(401).json({ message: 'Missing Authorization Token' });
  }

  try {
    decoded = await Jwt.verify(token, config['JWT_SECRET']);
  } catch (error) {
    if (error instanceof Jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Your session has expired, please login again' });
    }
    return res.status(401).json({ message: 'Invalid authentication token' });
  }

  req.user = {
    id: decoded.userId
  }

  next();
}

const jwtSign = async (payload) => {
  try {
    const encoded = await Jwt.sign(payload, config['JWT_SECRET'], { expiresIn: '60s' });
    return encoded;
  } catch (error) {
    throw error;
  }
}

export { jwtAuth, jwtSign }
