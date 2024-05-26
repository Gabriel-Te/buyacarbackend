import express from 'express'
import register from '../controllers/user/register.js'
import login from '../controllers/user/login.js'
import getById from '../controllers/user/getById.js'
import edit from '../controllers/user/edit.js'
import remove from '../controllers/user/remove.js'
import getAll from '../controllers/user/getAll.js'


const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/getAll', getAll)
router.get('/getById/:userid', getById)
router.put('/edit/:userid', edit)
router.delete('/remove/:userid', remove)


export default router