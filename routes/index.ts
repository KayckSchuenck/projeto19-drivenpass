import { Router } from "express";
import authRouter from "./authRoutes.js";
import cardRouter from "./cardsRoutes.js";
import notesRouter from "./notesRoutes.js";
import wifiRouter from "./wifiRoutes.js";
import credentialsRouter from "./credentialsRoutes.js";

const router = Router();
router.use(authRouter)
router.use(cardRouter)
router.use(credentialsRouter)
router.use(wifiRouter)
router.use(notesRouter)

export default router;
