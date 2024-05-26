import userModel from "../../models/userModel.js";

const remove = async(req,res) => {
    try {
        const userid = req.params.userid
        const removeUser = await userModel.remove(+userid)
        res.json({success:`usuario ${userid} removido com sucesso`, removeUser})
    } catch (error) {
        res.json({error: `erro ao remover o usuario`})
    }
}

export default remove