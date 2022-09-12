import { findByIdAndTitle,insertCard,findByIdAndUser,deleteById,findAll } from "../repositories/cardsRepository.js"
import Cryptr from "cryptr"

const cryptr=new Cryptr(process.env.KEY)

export async function postCardService(title:string,cardNumber:string,holderName:string,password:string,cvv:string,expirationDate:string,userId:number) {
    const checkTitle=await findByIdAndTitle(userId,title)
    if(checkTitle) throw {type:"conflict",message:"Título já cadastrado"}

    const encryptedPassword=cryptr.encrypt(password)
    const encryptedCvv=cryptr.encrypt(cvv)

    await insertCard({title,cardNumber,holderName,password:encryptedPassword,cvv:encryptedCvv,expirationDate,userId})
}


export async function getCardService(id:number,userId:number){
    if(!id) {
        const cards=await findAll(userId)
        return cards.map(card=>{
            return {...card,password:cryptr.decrypt(card.password),cvv:cryptr.decrypt(card.cvv)}
        })
    } 

    if(id) {
        const card=await findByIdAndUser(id,userId)

        if(!card) throw {type:"unauthorized",message:"Credencial pertencente à outra pessoa ou não encontrada"}

        return {...card,password:cryptr.decrypt(card.password),cvv:cryptr.decrypt(card.cvv)}
    }
}

export async function deleteCardService(id:number,userId:number){
    const card=await findByIdAndUser(id,userId)

    if(!card) throw {type:"unauthorized",message:"Credencial pertence à outra pessoa ou não encontrada"}

    await deleteById(id)
}