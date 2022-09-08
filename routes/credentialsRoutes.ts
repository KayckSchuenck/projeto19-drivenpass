import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware.js";
import { schemaLoginSignUp } from '../schemas/schemas.js';
import { postCredentials,getCredentials,deleteCredentials } from '../controllers/credentialsControllers.js';
import { validateToken } from '../middlewares/tokenValidation.js';

const credentialsRouter=Router();

credentialsRouter.post('/credentials',schemaValidateMiddleware(schemaLoginSignUp),validateToken,postCredentials)
credentialsRouter.get('/credentials/:id?',validateToken,getCredentials)
credentialsRouter.delete('/credentials/:id',schemaValidateMiddleware(schemaLoginSignUp),validateToken,deleteCredentials)

export default credentialsRouter