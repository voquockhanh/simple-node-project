import express from 'express'
import config from './config.js'
import logger, { morganLogger } from './libs/logger.js'
import * as Models from './models/index.js';
import router from './apis/index.js'
import cookieSession from 'cookie-session';

const app = express()
const port = config['APP_PORT']

app.use(express.json())
app.use(morganLogger)
app.use(cookieSession({
  name: 'bezkoder-session',
  secret: config['COOKIE_SECRET'],
  httpOnly: true,
  sameSite: 'strict'
}))
app.use(router)

const server = app.listen(port, () => {
  logger.info(`BezKoder Ecommerce server listening on port ${server.address().port}`)
})



