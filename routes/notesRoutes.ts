import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware.js";
import { schemaNotes } from '../schemas/schemas.js';
import { postNotes,getNotes,deleteNotes } from '../controllers/notesControllers.js';
import { validateToken } from '../middlewares/tokenValidation.js';

const notesRouter=Router();

notesRouter.post('/notes',schemaValidateMiddleware(schemaNotes),validateToken,postNotes)
notesRouter.get('/notes/:id?',validateToken,getNotes)
notesRouter.delete('/notes/:id',validateToken,deleteNotes)

export default notesRouter