import carModel from "../../models/carModel.js";

const edit = async(req, res) => {
    try {
        const car = req.body
        car.idcar = +req.params.idcar

        const editedcar = await carModel.edit(car)
        res.json({
            success: `veículo ${editedcar.idcar} editado com sucesso`,
            car : editedcar
        })
    } catch (error) {
        return res.status(500).json({
            error: 'erro no servidor, tente novamente',
            details: error.message
        })
    }
} 

export default edit