import { Router } from "express";
import { signUp } from "../controller/auth.controller.js";
import { signIn } from "../controller/auth.controller.js";
import { signOut } from "../controller/auth.controller.js";
const authRouter=Router();
authRouter.post('/sign-up',(req,res)=>{
    res.send(signUp)
})
authRouter.post('/sign-in',(req,res)=>{
    res.send(signIn)
})
authRouter.post('/sign-out',(req,res)=>{
    res.send(signOut)
})
export default authRouter;