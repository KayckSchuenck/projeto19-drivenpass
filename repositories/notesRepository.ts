import prisma from "../database.js";
import { CreateNotesData } from "../types/types.js";

export async function findByIdAndTitle(userId:number,title:string) {
    return prisma.notes.findFirst({
        where: { userId,title }
    })
}

export async function insertNote(createNote:CreateNotesData){
    await prisma.notes.create({
        data:createNote
    })
}

export async function findByIdAndUser(id:number,userId:number){
    return prisma.notes.findFirst({
        where: { id,userId },
    });
}

export async function deleteById(id:number){
    await prisma.notes.delete({
        where:{id}
    })
}

export async function findAll(userId:number) {
    return prisma.notes.findMany({
        where:{userId}
    })
}