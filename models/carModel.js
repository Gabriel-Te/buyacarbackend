import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const CarSchema = z.object({
    idcar: z.number({
        required_error: "ID é obrigatório",
        invalid_type_error: "Id tem de ser um número inteiro"
    }),
    name: z.string({
        required_error: "Nome é obrigatório",
        invalid_type_error: "nome deve ser uma string"
    })
        .min(3, {message: 'O nome deve ter no mínimo 3 caracteres.'})
        .max(200, {message: 'O nome deve ter no máximo 200 caracteres.'}),
    price: z.number({
        required_error: 'preço é obrigatório',
        invalid_type_error: 'preço deve ser um number',
    }),
    image: z.string({
        required_error: 'Imagem é obrigatório',
        invalid_type_error: 'Imagem deve ser uma string',
    })
        .min(6, {message: 'A imagem deve ter no mínimo 6 caracteres'})
})

const validateCarToCreate = ({name, price, image}) => {
    const partialCarSchema = CarSchema.partial({idcar: true})
    return partialCarSchema.safeParse({name, price, image})
}

const validateCarToUpdate = (car) => {
    const partialCarSchema = CarSchema.partial({idcar: true})
    return partialCarSchema.safeParse(car)
}


const create = async (car) => {
    return await prisma.car.create({
        data: car
    })
}

const getAll = async () => {
    return await prisma.car.findMany()
}

const getById = async (idcar) => {
    return await prisma.car.findUnique({
        where: {
            idcar
        }
    })
}

const remove = async (idcar) => {
    return await prisma.car.delete({
        where: {
            idcar
        }
    })
}

const edit = async (car) => {
    return await prisma.car.update({
        where: {
            idcar: car.idcar
        },
        data: {
            name: car.name,
            price: car.price,
            image: car.image

        }
    })
}

export default { create, getAll, getById, remove, edit, validateCarToCreate, validateCarToLogin, validateCarToUpdate }