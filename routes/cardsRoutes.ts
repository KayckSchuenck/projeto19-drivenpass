import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware.js";
import { schemaCard } from '../schemas/schemas.js';
import { postCards,getCards,deleteCards } from '../controllers/cardsControllers.js';
import { validateToken } from '../middlewares/tokenValidation.js';

const cardsRouter=Router();

cardsRouter.post('/cards',schemaValidateMiddleware(schemaCard),validateToken,postCards)
cardsRouter.get('/cards/:id?',validateToken,getCards)
cardsRouter.delete('/cards/:id',validateToken,deleteCards)

export default cardsRouter