import carModel from '../../models/carModel.js'

const create = async(req,res) => {
    const userId = req.user.id;
    try{
        const {name, price, image} = req.body;




        const newCar = await carModel.create({
            name: name,
            price: price,
            image: image,
            user_iduser: userId
        })
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