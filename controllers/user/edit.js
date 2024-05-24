
import userModel from "../../models/userModel.js";

const edit = async(req, res) => {
    try {
        const {user} = req.body

        console.log('Received user data:', user);

        const editeduser = await userModel.edit(user)
        res.json({
            success: `veículo ${editeduser.iduser} editado com sucesso`,
            user : editeduser
        })
    } catch (error) {
        return res.status(500).json({
            error: 'erro no servidor, tente novamente',
            details: error.message
        })
    }
} 

export default edit