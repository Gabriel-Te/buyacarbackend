import userModel from "../../models/userModel.js";

const getAll = async(req,res) => {
    try {
        const result = await userModel.getAll()
        res.json({success: `usuários encontrados com sucesso`, result})
    } catch (error) {
        res.status(500).json({error: `erro ao encontrar os usuários`})
    }
}

export default getAll