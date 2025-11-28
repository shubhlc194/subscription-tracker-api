import express from 'express';
const app=express();
const port=3030;
app.listen(port,()=>{
    console.log(`app is listening at localhost:${port}`);
})