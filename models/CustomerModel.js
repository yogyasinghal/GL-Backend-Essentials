const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://cram_js:cramjs@cluster0.zdsqd.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log('connected to db')).catch((e)=>console.log('error in connection',e))

const contactModel=mongoose.model("ContactsCollection",{
    Fname:String,
    Phone:Number,
    Address:String
})

//creating a document
module.exports=contactModel

