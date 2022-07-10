import express from 'express'
import Controller from '../controllers/ProductController.js'

const router = express.Router();

router.get('/', Controller.handle('getAll'))
router.post('/', Controller.handle('create'))
router.get('/:id', Controller.handle('find'))
router.put('/:id', Controller.handle('update'))
router.delete('/:id', Controller.handle('delete'))

export default router;