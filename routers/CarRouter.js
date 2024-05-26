import express from 'express'
import create from '../controllers/car/create.js'
import listAll from '../controllers/car/listAll.js'
import getById from '../controllers/car/getById.js'
import remove from '../controllers/car/remove.js'
import edit from '../controllers/car/edit.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/listAll', listAll)
router.get('/getById/:idcar', getById)
router.post('/create', create)
router.put('/edit/:idcar', edit)
router.delete('/remove/:idcar', remove)


export default router