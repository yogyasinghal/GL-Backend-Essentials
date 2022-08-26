const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const usermodel=require("../models/UserModel")
router.post('/createadmin',(req,res)=>{
    const cookieip=req.cookies.authorizer
    const decodedtoken=jwt.verify(cookieip,'jamesbond')
    console.log(decodedtoken)
    if(decodedtoken.role==='admin'){
    const data=req.body
    const obj=new usermodel({
        fname:data.fname,
        email:data.email,
        password:data.password,
        phone:data.phone,
        role:'admin'  
    })
    obj.save().then((result)=>res.send({'msg':'signup succeeded',"status":true})).catch((e)=>res.send({"msg":'some error occured try again',"status":false}))
    }
    else{
        res.send({'msg':'u are not authorized ',"status":false})
    }

})

module.exports=router