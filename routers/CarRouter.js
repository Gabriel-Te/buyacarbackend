import express from 'express'
import create from '../controllers/car/create.js'
import listAll from '../controllers/car/listAll.js'
import getById from '../controllers/car/getById.js'
import edit from '../controllers/car/edit.js'
import remove from '../controllers/car/remove.js'

const router = express.Router()

router.get('/listAll', listAll)
router.get('/getById/:idcar', getById)
router.post('/create', create)
router.put('/edit', edit)
router.delete('/remove/:idcar', remove)


export default router