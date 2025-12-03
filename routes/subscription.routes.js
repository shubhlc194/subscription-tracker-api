import { Router } from "express";
import { title } from "process";
const subscriptionRouter=Router();
subscriptionRouter.get('/',(req,res)=>{
    res.send({
        title:"get all subscription"

    })
})
subscriptionRouter.get('/:id',(req,res)=>{
    res.send({
        title:"get  subscription"

    })
})

subscriptionRouter.post('/',(req,res)=>{
    res.send({
        title:"create  subscription"

    })
})


subscriptionRouter.put('/:id',(req,res)=>{
    res.send({
        title:"update  subscription"

    })
})


subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({
        title:"delete  subscription"

    })
})

subscriptionRouter.get('/users:/id',(req,res)=>{
    res.send({
        title:"get all users subscription"

    })
})

subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({
        title:"cancal subscription"

    })
})

subscriptionRouter.get('/upcoming-renewl',(req,res)=>{
    res.send({
        title:"get all upcoming-renowl  subscription"

    })
})





export default subscriptionRouter;