import carModel from "../../models/carModel.js";

const remove = async(req,res) => {
    try {
        const idcar = req.params.idcar
        const removeCar = await carModel.remove(+idcar)
        res.json({
            sucess: `veículo ${idcar} removido com sucesso`, removeCar
        })
    } catch (error) {
        res.status(500).json({
            error: "erro ao remover o veículo"
        })
    }
}

export default remove