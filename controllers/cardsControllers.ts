import { Request,Response } from "express";
import { postCardService,deleteCardService,getCardService } from "../services/cardsService.js";

export async function postCards(req:Request, res:Response) {
    const {title,cardNumber,holderName,password,cvv,expirationDate}=req.body
    const {userId}=res.locals.id

    await postCardService(title,cardNumber,holderName,password,cvv,expirationDate,Number(userId))
    res.sendStatus(201)
}

export async function getCards(req:Request, res:Response) {
    const {id:targetId}=req.params
    const userId=Number(res.locals.id.userId)

    const result=await getCardService(Number(targetId),userId)
    res.status(200).send(result)
}

export async function deleteCards(req:Request, res:Response) {
    const {id}=req.params
    const userId=Number(res.locals.id.userId)

    await deleteCardService(Number(id),userId)
    res.sendStatus(200)
}