import userModel from "../../models/userModel";

const remove = async(req,res) => {
    try {
        const userid = req.params.userid
        const removeUser = await userModel.remove(+userid)
        res.json(`usuario ${userid} encontrado com sucesso`, removeUser)
    } catch (error) {
        res.json(`erro ao encontrar o usuario`,error)
    }
}