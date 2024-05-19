import carModel from "../../models/carModel.js";

const edit = async(req, res) => {
    try {
        const {car} = req.body
        const idcar = parseInt(+req.params.idcar,)

        console.log('Received car data:', car); // Log do corpo da requisição
        console.log('Received car ID:', req.params.idcar); // Log do ID da URL
        console.log('Parsed car ID:', idcar); // Log do ID convertido


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