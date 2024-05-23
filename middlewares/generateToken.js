import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config.js'

const generateToken = (iduser) => {
    return jwt.sign({ id: iduser }, JWT_SECRET, {expiresIn: '1hr'})
}

export default generateToken