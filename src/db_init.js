import { Sequelize } from 'sequelize'
import DATABASES from './db_config.js'
import logger from './libs/logger.js'

let credentials = null

switch (process.env.NODE_ENV) {
  case 'development':
    credentials = DATABASES.development
    break;
  case 'test':
    credentials = DATABASES.test
    break;
  default:
    credentials = DATABASES.development
    break;
}

const sequelize = new Sequelize(
  credentials.database,
  credentials.username,
  credentials.password,
  {
    host: credentials.host,
    port: credentials.port,
    dialect: credentials.dialect,
    logging: (msg) => logger.debug(msg)
  }
)

const validate = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
    logger.error(error.stack)
  }
}
validate()

export default sequelize;
