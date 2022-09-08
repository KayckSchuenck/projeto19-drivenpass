import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware.js";
import { schemaWifi } from '../schemas/schemas.js';
import { validateToken } from '../middlewares/tokenValidation.js';
import { postWifi,getWifi,deleteWifi } from '../controllers/wifiControllers.js';


const wifiRouter=Router();

wifiRouter.post('/wifi',schemaValidateMiddleware(schemaWifi),validateToken,postWifi)
wifiRouter.get('/wifi/:id?',validateToken,getWifi)
wifiRouter.delete('/wifi/:id',validateToken,deleteWifi)

export default wifiRouter