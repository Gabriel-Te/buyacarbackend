import userModel from '../../models/userModel.js'

const getById = async (req,res) =>{
    try {
        const userid = req.params.userid
        const user = await userModel.getById(+userid)
        res.json({success:`usuario ${userid} encontrado com sucesso`, user})
    } catch (error) {
        res.status(500).json({error:'erro ao encontrar o usuario'})
    }
}

export default getById