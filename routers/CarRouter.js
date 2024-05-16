import express from 'express'
import create from '../controllers/car/create.js'
import listAll from '../controllers/car/listAll.js'

const router = express.Router()

router.post('/create', create)
router.get('/listAll', listAll)

export default router