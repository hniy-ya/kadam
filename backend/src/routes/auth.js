
import express from 'express';
import {  getMe, login, logout, signup } from '../controllers/auth.controller.js';
import {protectRoute} from '../middlewares/auth.middileware.js';
const router=express.Router();
router.post("/register",signup);
router.post("/login",login);
router.post("/logout",logout);
router.get("/me", protectRoute, getMe);






export default router;