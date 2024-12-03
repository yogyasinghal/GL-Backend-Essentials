const express=require('express')
const app=express()
const bp=require('body-parser')
const cors = require('cors');
const jwt=require('jsonwebtoken')
const authorize_middleware = require('./middleware/authorize')
const userCredentials=require('./data/credentials')
app.use(bp.json())
app.use(cors())
app.get('/middleware',authorize_middleware,(req,res)=>{
    res.send("middleware working");
})

app.post('/signin',(req,res)=>{
    console.log("signin in auth");
const data=req.body
console.log(data);
const result=userCredentials.find((item)=>item.email===data.email)
if(data.password===result.password){
    const token=jwt.sign({email:data.email},'jamesbond')
    console.log("token= ",token);
    res.send({"msg":'authenticated',"status":true,"accesstoken":token})
}
else{
    res.send({"msg":' not authenticated',"status":false})
}
})

app.get('/data',(req,res)=>{
    // const data = req.body;
    // console.log("data from data route",data);
    const inputtoken=req.headers.authorization;
    // console.log(inputtoken);
    // res.send("k")
    const token=inputtoken.replace('Bearer ','')
    try{
        console.log("token= ",token);
    const result=jwt.verify(token,'jamesbond')
    res.send({"msg":'user verified successfully'})
    }
    catch(e){
        res.send({"msg":'you are not authorized'})
    }
})

app.post('/delete',(req,res)=>{
    const inputtoken=req.headers.authorization
    const token=inputtoken.replace('Bearer ','')
    try{
        console.log("token= ",token);
    const result=jwt.delete(token);
    console.log("result",result);
    res.send({"msg":'deleted successfully'})
    }
    catch(e){
        res.send({"msg":'you are not authorized'})
    }
})
// app.post('/delete',(req,res)=>{
//     const inputtoken=req.headers.authorization
//     const token=inputtoken.replace('Bearer ','')
//     try{
//         console.log("token= ",token);
//     const result=jwt.verify(token,'jamesbond')
//     res.send({"msg":'deleted successfully'})
//     }
//     catch(e){
//         res.send({"msg":'you are not authorized'})
//     }
// })

app.post('/update',authorize,(req,res)=>{
    console.log("update",req.headers.authorization);
    res.send("update send")
})

function authorize(req,res,next){
    console.log("authorise");
    // res.send("from middleware")
    next();
    // return true;
}




app.listen(3001,()=>console.log('server started at port 3001'))

/**
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwiaWF0IjoxNjYxMzE2NTAzfQ.B08rvaOc-DLwY6WJHYW_nsni-FGaOHC_xwauXLjZuSA  
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbnJ5QGdtYWlsLmNvbSIsImlhdCI6MTY2MTMxNjU1MH0.gVbKQx-HCAxMpnbYHIufcDm60U18kR9ZkOrkMx98NaQ 
 */