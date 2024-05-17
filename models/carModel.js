import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const create = async(car) =>{
    return await prisma.car.create({
        data: car
    })
}

const getAll = async() => {
    return await prisma.car.findMany()
}

const getById = async(idcar) => {
    return await prisma.car.findUnique({
        where: {
            idcar
        }
    })
}

const remove = async(idcar) =>{
    return await prisma.car.delete({
        where: {
            idcar
        }
    })
}


export default {create, getAll, getById, remove}