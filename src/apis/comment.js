import express from 'express'
import Controller from '../controllers/CommentController.js'
import { jwtAuth } from '../middlewares/jwtAuth.js';

const router = express.Router();

router.get('/', Controller.handle('getAll'))
router.post('/', jwtAuth, Controller.handle('create'))
router.get('/:id', Controller.handle('find'))
router.put('/:id', jwtAuth, Controller.handle('update'))
router.delete('/:id', jwtAuth, Controller.handle('delete'))

export default router;