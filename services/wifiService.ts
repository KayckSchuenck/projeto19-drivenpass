import Cryptr from "cryptr"
import { findByIdAndTitle,insertWifi,findByIdAndUser,deleteById,findAll } from "../repositories/wifiRepository.js"

const cryptr=new Cryptr(process.env.KEY)

export async function postWifiService(name:string,password:string,title:string,userId:number) {
    const checkTitle=await findByIdAndTitle(userId,title)
    if(checkTitle) throw {type:"conflict",message:"Título já cadastrado"}

    const encryptedPassword=cryptr.encrypt(password)
    await insertWifi({title,name,password:encryptedPassword,userId})
}

export async function getWifiService(id:number,userId:number){
    if(!id) {
        const wifis=await findAll(userId)
        return wifis
    } 

    if(id) {
        const wifi=await findByIdAndUser(id,userId)

        if(!wifi) throw {type:"unauthorized",message:"Credencial pertencente à outra pessoa ou não encontrada"}

        return {...wifi,password:cryptr.decrypt(wifi.password)}
    }
}

export async function deleteWifiService(id:number,userId:number){
    const wifi=await findByIdAndUser(id,userId)

    if(!wifi) throw {type:"unauthorized",message:"Credencial pertence à outra pessoa ou não encontrada"}

    await deleteById(id)
}