import joi from 'joi'

export const schemaLoginSignUp=joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(10).required(),
})

export const schemaCredentials=joi.object({
    url:joi.string().uri().required(),
    password:joi.string().required(),
    username:joi.string().required(),
    title:joi.string().required()
})

export const schemaNotes=joi.object({
    text:joi.string().max(1000).required(),
    title:joi.string().max(50).required()
})

export const schemaWifi=joi.object({
    name:joi.string().required(),
    password:joi.string().required(),
    title:joi.string().required()
})