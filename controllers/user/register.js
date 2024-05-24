
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from '../../models/userModel.js'
import generateToken from '../../middlewares/generateToken.js'

const register = async(req,res) => {
    try{
        const {username, password} = req.body
        const result = userModel.validateUserToCreate()

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({
                username : username,
                password : hashedPassword
        })

        const token = generateToken(newUser.iduser)


        return res.json({
            success: `usuário registrado, ${newUser}`, token
        })
    }catch(error){
        return res.status(500).json({
            error: 'erro ao registrar o user',
            details : error.message
        })
    }
}

export default register