import express from 'express'
import ProductRouter from './product.js'
import FileRouter from './file.js'
import UserRouter from './user.js'
import CommentRouter from './comment.js'

const router = express.Router();

router.use('/products/', ProductRouter)
router.use('/files/', FileRouter)
router.use('/users/', UserRouter)
router.use('/comments/', CommentRouter)

export default router;
