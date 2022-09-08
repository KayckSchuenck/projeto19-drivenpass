import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import notFoundError from "./notFoundError.js";

export function validateToken(req : Request, res: Response, next: NextFunction){
    const { authorization } = req.headers;

    const token = authorization?.replace('Bearer ', '').trim() as string;
    if (!token) throw notFoundError('token')

    const secretKey = process.env.JWT_SECRET;

    const {userId}=jwt.verify(token, secretKey)

    res.locals.userId =userId
    next();
};

