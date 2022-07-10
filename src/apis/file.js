import express from 'express'
import Controller from '../controllers/FileController.js'

const router = express.Router();

router.post('/upload', Controller.handle('upload'))

export default router;