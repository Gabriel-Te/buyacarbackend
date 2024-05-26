import { PrismaClient } from '@prisma/client'
import {z} from 'zod'
const prisma = new PrismaClient()

const userSchema = z.object({
    iduser: z.number({
        required_error: "ID é obrigatório",
        invalid_type_error: "Id tem de ser um número inteiro"
    }),
    username: z.string({
        required_error: "Nome é obrigatório",
        invalid_type_error: "nome deve ser uma string"
    })
        .min(3, {message: 'O nome deve ter no mínimo 3 caracteres.'})
        .max(200, {message: 'O nome deve ter no máximo 200 caracteres.'}),
    password: z.string({
        required_error: 'Senha é obrigatório',
        invalid_type_error: 'Senha deve ser uma string',
    })
        .min(6, {message: 'A senha deve ter no mínimo 6 caracteres'})
})

const validateUserToCreate = ({username, password}) => {
    const partialUserSchema = userSchema.partial({iduser: true})
    return partialUserSchema.safeParse({username, password})
}

const validateUserToUpdate = ({username}) => {
    const partialUserSchema = userSchema.partial({password: true})
    return partialUserSchema.safeParse({username})
}

const validateUserToLogin = ({username, password}) => {
    const partialUserSchema = userSchema.partial({iduser: true})
    return partialUserSchema.safeParse({username, password})
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
    return await prisma.user.update({
        where: {
            iduser: user.iduser
        },
        data: {
            username: user.username,
            password: user.password,
        }
    })
}

export default { create, getAll, getById, remove, edit, findUserByUsername,validateUserToCreate,validateUserToLogin,validateUserToUpdate}