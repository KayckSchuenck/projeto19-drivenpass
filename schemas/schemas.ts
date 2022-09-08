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