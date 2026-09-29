import Router from "express";
import { IndexController } from "../controller";

export const router = Router();
router.get("/", IndexController.index); 
