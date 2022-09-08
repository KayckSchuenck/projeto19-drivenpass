import { findByIdAndTitle,insertNote,findByIdAndUser,deleteById,findAll } from "../repositories/notesRepository.js"

export async function postNoteService(title:string,text:string,userId:number) {
    const checkTitle=await findByIdAndTitle(userId,title)
    if(checkTitle) throw {type:"conflict",message:"Título já cadastrado"}

    await insertNote({title,text,userId})
}


export async function getNoteService(id:number,userId:number){
    if(!id) {
        const notes=await findAll(userId)
        return notes
    } 

    if(id) {
        const note=await findByIdAndUser(id,userId)

        if(!note) throw {type:"unauthorized",message:"Credencial pertencente à outra pessoa ou não encontrada"}

        return note
    }
}

export async function deleteNoteService(id:number,userId:number){
    const note=await findByIdAndUser(id,userId)

    if(!note) throw {type:"unauthorized",message:"Credencial pertence à outra pessoa ou não encontrada"}

    await deleteById(id)
}