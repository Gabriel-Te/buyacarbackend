import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const userSchema = z.object({
    iduser: z.number({
        required_error: "ID é obrigatório",
        invalid_type_error: "O ID deve ser um número inteiro.",
    }),
    username: z.string({
        required_error: "username é obrigatório.",
        invalid_type_error: "O username deve ser uma string.",
      })
      .min(3, {message: 'O username deve ter no mínimo 3 letras.'})
      .max(200, {message: 'O username deve ter no máximo 200 caracteres.'}),
    password: z.string({
        required_error: "O password é obrigatório.",
        invalid_type_error: "O password deve ser uma string.",
      })
})
const validateUserToCreate = ({iduser,username, password}) => {
    const partialUserSchema = userSchema.partial({iduser: true})
    return partialUserSchema.safeParse(user)
}

const validateUserToUpdate = (user) => {
    const partialUserSchema = userSchema.partial({pass: true})
    return partialUserSchema.safeParse(user)
}

const validateUserToLogin = (user) => {
    const partialUserSchema = userSchema.partial({iduser: true, username: true, password: true})
    return partialUserSchema.safeParse(user)
}

const create = async (userData) => {
    try {
        return await prisma.user.create({
            data: userData
        });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
};

const findUserByUsername = async (username) => {
    return await prisma.user.findUnique({ where: { username: username } });
  };


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

export default { create, getAll, getById, remove, edit, findUserByUsername, validateUserToCreate, validateUserToUpdate, validateUserToLogin}