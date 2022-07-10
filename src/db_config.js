import config from './config.js'

const DATABASES = {
  development: {
    database: config['DB_NAME'],
    username: config['DB_USER'],
    password: config['DB_PASSWORD'],
    host: config['DB_HOST'],
    port: config['DB_PORT'],
    dialect: 'mysql'
  },
  test: {
    database: config['DB_TEST_NAME'],
    username: config['DB_TEST_USER'],
    password: config['DB_TEST_PASSWORD'],
    host: config['DB_TEST_HOST'],
    port: config['DB_TEST_PORT'],
    dialect: 'mysql'
  },
  production: {}
}

export default DATABASES;