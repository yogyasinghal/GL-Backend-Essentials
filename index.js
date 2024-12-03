const express=require('express')
const app=express()
const bp=require('body-parser')
app.use(bp.json())
const createContact=require('./controllers/CreateUser')
app.use('/',createContact)
app.listen(3001,()=>console.log('server started'))

// we are calling only create user , inside createuser we call model
// use npm start to start
// pass body to  http://localhost:3001/create ---post
// {
//     "fname": "tony stark 3:38",
//     "phone": "12345",
//     "address":"india"
// }