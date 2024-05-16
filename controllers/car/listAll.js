import carModel from '../../models/carModel.js'

const listAll = async(req,res) => {
    try{
        const cars = await carModel.getAll()
        return res.json({
            sucess: "Usuários Listados com Sucesso!",
            cars
        })
    }catch(error){

    }
}
export default listAll