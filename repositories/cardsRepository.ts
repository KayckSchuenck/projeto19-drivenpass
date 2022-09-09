import prisma from "../database.js";
import { CreateCardData } from "../types/types.js";

export async function insertCard(createCard:CreateCardData){
    await prisma.cards.create({
        data:createCard
      });
}

export async function findByIdAndTitle(userId:number,title:string){
    return prisma.cards.findFirst({
        where: { userId,title },
    });
}

export async function findByIdAndUser(id:number,userId:number){
    return prisma.cards.findFirst({
        where: { id,userId },
    });
}

export async function deleteById(id:number){
    await prisma.cards.delete({
        where:{id}
    })
}

export async function findAll(userId:number) {
    return prisma.cards.findMany({
        where:{userId}
    })
}