const express=require('express')
const app=express()
const bp=require('body-parser')
const jwt=require('jsonwebtoken')
const userCredentials=require('./data/credentials')
app.use(bp.json())

app.post('/signin',(req,res)=>{
const data=req.body
const result=userCredentials.find((item)=>item.email===data.email)
if(data.password===result.password){
    const token=jwt.sign({email:data.email},'jamesbond')
    res.send({"msg":'authenticated',"status":true,"accesstoken":token})
}
else{
    res.send({"msg":' not authenticated',"status":false})
}
})

app.post('/delete',(req,res)=>{
    const inputtoken=req.headers.authorization
    const token=inputtoken.replace('Bearer ','')
    try{
    const result=jwt.verify(token,'jamesbond')
    res.send({"msg":'deleted successfully'})
    }
    catch(e){
        res.send({"msg":'you are not authorized'})
    }
})

app.listen(3001,()=>console.log('server started at port 3001'))

/**
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwiaWF0IjoxNjYxMzE2NTAzfQ.B08rvaOc-DLwY6WJHYW_nsni-FGaOHC_xwauXLjZuSA  
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbnJ5QGdtYWlsLmNvbSIsImlhdCI6MTY2MTMxNjU1MH0.gVbKQx-HCAxMpnbYHIufcDm60U18kR9ZkOrkMx98NaQ 
 */