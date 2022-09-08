import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

import notFoundError from "../middlewares/notFoundError";
import { findByEmail,insertUser } from "../repositories/authRepository";


export async function serviceSignUp(email:string,password:string){
    const checkEmail = await findByEmail(email);
    if (checkEmail) throw {type:"Conflict",message:"E-mail já cadastrado"}

    const hashPassword = bcrypt.hashSync(password, 10);
    await insertUser({email, password:hashPassword});
}

export async function serviceLogin(email:string,password:string) {
    const checkEmail = await findByEmail(email);
    if (!checkEmail) notFoundError('E-mail')
    
    if (bcrypt.compareSync(password, checkEmail.password)) {
      const data = { userId: checkEmail.id };
      const secretKey = process.env.JWT_SECRET;
      const config = { expiresIn: 60 * 60 * 24 };
      const token = jwt.sign(data, secretKey, config);
      return token
    } else throw {type:"Unauthorized",message:"Senha incorreta"}
}