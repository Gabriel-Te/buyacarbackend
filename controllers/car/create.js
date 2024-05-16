import carModel from '../../models/carModel.js'

const create = async(req,res) => {
    try{
        const car = req.body
        const newCar = await carModel.create(car)
        return res.json({
            sucess: `produto ${newCar.idcar} criado com sucesso`,
            car: newCar
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            error: 'erro no servidor, tente novamente'
        })
    }
}
export default create