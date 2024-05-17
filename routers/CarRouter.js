import express from 'express'
import create from '../controllers/car/create.js'
import listAll from '../controllers/car/listAll.js'
import getById from '../controllers/car/getById.js'

const router = express.Router()

router.post('/create', create)
router.get('/listAll', listAll)
router.get('/getById/:idcar', getById)

export default router