import express from "express";
import { main } from "../controller/controller";
export const router = express.Router();
router.post('/pub',main.signup)