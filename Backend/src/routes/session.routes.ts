import { Router } from "express";
import { authMiddlware } from "../middlewares/auth.middleware";
import { bookSession, cancelSession, getAllSession, getSessionById } from "../controllers/session.controller";

export const sessionRouter = Router();

sessionRouter.post('/book',authMiddlware,bookSession);
sessionRouter.post('/cancel',authMiddlware,cancelSession);
sessionRouter.get('/all',authMiddlware,getAllSession);
sessionRouter.get('/:id',authMiddlware,getSessionById);