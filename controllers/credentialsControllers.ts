import { Request,Response } from "express";
import { deleteCredentialService, getCredentialService, postCredentialService } from "../services/credentialsService.js";

export async function postCredentials(req:Request, res:Response) {
    const {title,username,url,password}=req.body
    const {userId}=res.locals

    await postCredentialService(title,username,url,password,Number(userId))
    res.sendStatus(201)
}

export async function getCredentials(req:Request, res:Response) {
    const {id:targetId}=req.params
    const userId=Number(res.locals.userId)

    const result=await getCredentialService(Number(targetId),userId)
    res.status(200).send(result)
}

export async function deleteCredentials(req:Request, res:Response) {
    const {id}=req.params
    const userId=Number(res.locals.userId)

    await deleteCredentialService(Number(id),userId)
    res.sendStatus(200)
}