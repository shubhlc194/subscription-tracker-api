import { Router } from "express";
import { title } from "process";
const userRouter=Router();
userRouter.get('/',(req,res)=>{
    res.send({
        title:"get all user"
    })
})
userRouter.get('/:id',(req,res)=>{
    res.send({
        title:"get user details"
    })
})
userRouter.post('/',(req,res)=>{
    res.send({
        title:"create a new user"
    })
})
userRouter.put('/:id',(req,res)=>{
    res.send({
        title:"update user details"
    })
})
userRouter.delete('/:id',(req,res)=>{
    res.send({
        title:"delete user "
    })
})
export default userRouter;