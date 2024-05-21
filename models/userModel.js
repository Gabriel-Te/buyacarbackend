import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const create = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

const getAll = async () => {
    return await prisma.user.findMany()
}

const getById = async (iduser) => {
    return await prisma.user.findUnique({
        where: {
            iduser
        }
    })
}

const remove = async (iduser) => {
    return await prisma.user.delete({
        where: {
            iduser
        }
    })
}

const edit = async (user) => {
    return await prisma.car.update({
        where: {
            iduser: user.iduser
        },
        data: {
            username: user.username,
            password: user.password,
        }
    })
}

export default { create, getAll, getById, remove, edit }