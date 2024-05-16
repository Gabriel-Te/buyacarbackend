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


export default {create, getAll}