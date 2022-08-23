const express=require('express')
const app=express()
const data=require('./data/contacts')
app.get('/home',(req,res)=>{
res.send(JSON.stringify(data))
})
app.get('/user',(req,res)=>{
    res.send('user data')
})

app.listen(3001,()=>console.log('server has started at port no 3001'))