import userModel from '../../models/userModel'

const getById = async (req,res) =>{
    try {
        const userid = req.params.userid
        const user = await userModel.getById(+userid)
        res.json(`usuario ${userid} encontrado com sucesso`, user)
    } catch (error) {
        res.status(500).json('erro ao encontrar o usuario', error)
    }
}