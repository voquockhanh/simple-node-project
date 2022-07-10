import * as Models from '../models/index.js';
import logger from '../libs/logger.js';
import bcrypt from 'bcrypt';


const authenticateUser = async (email, password) => {
  const user = await Models.User.findOne({ where: { email } });

  if (!user) {
    throw new Error('User not found, please registering instead');
  }

  let result = false;

  try {
    result = await bcrypt.compare(password, user.password);
  } catch (error) {
    logger.error(`Unable to validate email: ${email}`, error);
    logger.error(error.stack);
    throw new Error('User authentication failed, please try again');
  }

  if (!result) {
    throw new Error('User authentication failed, please try again');
  }

  return {
    id: user.id,
    email: user.email
  }
}

export default authenticateUser;