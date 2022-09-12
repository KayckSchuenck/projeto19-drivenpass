import { Request,Response } from "express";
import { postNoteService,deleteNoteService,getNoteService } from "../services/notesService.js";

export async function postNotes(req:Request, res:Response) {
    const {title,text}=req.body
    const {userId}=res.locals.id

    await postNoteService(title,text,Number(userId))
    res.sendStatus(201)
}

export async function getNotes(req:Request, res:Response) {
    const {id:targetId}=req.params
    const userId=Number(res.locals.id.userId)

    const result=await getNoteService(Number(targetId),userId)
    res.status(200).send(result)
}

export async function deleteNotes(req:Request, res:Response) {
    const {id}=req.params
    const userId=Number(res.locals.id.userId)

    await deleteNoteService(Number(id),userId)
    res.sendStatus(200)
}