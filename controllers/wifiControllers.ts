import { Request,Response } from "express";
import { postWifiService,deleteWifiService,getWifiService } from "../services/wifiService.js";

export async function postWifi(req:Request, res:Response) {
    const {name,password,title}=req.body
    const {userId}=res.locals.id

    await postWifiService(name,password,title,Number(userId))
    res.sendStatus(201)
}

export async function getWifi(req:Request, res:Response) {
    const {id:targetId}=req.params
    const userId=Number(res.locals.id.userId)

    const result=await getWifiService(Number(targetId),userId)
    res.status(200).send(result)
}

export async function deleteWifi(req:Request, res:Response) {
    const {id}=req.params
    const userId=Number(res.locals.id.userId)

    await deleteWifiService(Number(id),userId)
    res.sendStatus(200)
}