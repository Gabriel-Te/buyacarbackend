import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const create = async(car) =>{
    return await prisma.car.create({
        data: car
    })
}

export default {create}