import prisma from "../database.js";
import { CreateWifiData } from "../types/types";

export async function findByIdAndTitle(userId:number,title:string) {
    return prisma.wifis.findFirst({
        where: { userId,title }
    })
}

export async function insertWifi(createWifi:CreateWifiData){
    await prisma.wifis.create({
        data:createWifi
    })
}

export async function findByIdAndUser(id:number,userId:number){
    return prisma.wifis.findFirst({
        where: { id,userId },
    });
}

export async function deleteById(id:number){
    await prisma.wifis.delete({
        where:{id}
    })
}

export async function findAll(userId:number) {
    return prisma.wifis.findMany({
        where:{userId}
    })
}