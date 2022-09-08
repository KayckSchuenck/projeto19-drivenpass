import prisma from "../database.js";
import { CreateCredentialsData } from "../types/types";

export async function insertCredential(createCredential:CreateCredentialsData){
    await prisma.credentials.create({
        data:createCredential
      });
}

export async function findByIdAndTitle(userId:number,title:string){
    return prisma.credentials.findFirst({
        where: { userId,title },
    });
}

export async function findByIdAndUser(id:number,userId:number){
    return prisma.credentials.findFirst({
        where: { id,userId },
    });
}

export async function deleteById(id:number){
    await prisma.credentials.delete({
        where:{id}
    })
}

export async function findAll(userId:number) {
    return prisma.credentials.findMany({
        where:{userId}
    })
}