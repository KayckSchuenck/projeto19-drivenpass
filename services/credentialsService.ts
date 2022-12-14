import Cryptr from "cryptr";
import { insertCredential,findByIdAndTitle,deleteById,findByIdAndUser,findAll } from "../repositories/credentialsRepository.js";

const cryptr=new Cryptr(process.env.KEY)

export async function postCredentialService(title:string,username:string,url:string,password:string,userId:number){

    const checkTitle=await findByIdAndTitle(userId,title)
    if(checkTitle) throw {type:"conflict",message:"Título já cadastrado"}
    
    const encryptedPassword=cryptr.encrypt(password)
    await insertCredential({title,username,url,password:encryptedPassword,userId})
}

export async function getCredentialService(id:number,userId:number){
    if(!id) {
        const credentials=await findAll(userId)
        return credentials.map(credential=>{
            return {...credential,password:cryptr.decrypt(credential.password)}
        })
    } 

    if(id) {
        const credential=await findByIdAndUser(id,userId)

        if(!credential) throw {type:"unauthorized",message:"Credencial pertencente à outra pessoa ou não encontrada"}

        return {...credential,password:cryptr.decrypt(credential.password)}
    }
}

export async function deleteCredentialService(id:number,userId:number){
    const credential=await findByIdAndUser(id,userId)

    if(!credential) throw {type:"unauthorized",message:"Credencial pertence à outra pessoa ou não encontrada"}

    await deleteById(id)
}