import carModel from "../../models/carModel.js"

const getById = async (req,res) => {
    try {
        const idcar = req.params.idcar
        const car = await carModel.getById(+idcar)
        res.json({
            sucess: `carro ${idcar} encontrado com sucesso`, car
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'servidor com problemas para exibir o veículo'
        })
    }
}

export default getById