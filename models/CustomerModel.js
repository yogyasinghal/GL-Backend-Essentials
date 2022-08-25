const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://cram_js:cramjs@cluster0.zdsqd.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log('connected to db')).catch((e)=>console.log('error in connection',e))

const contactModel=mongoose.model("ContactsCollection",{
    Fname:String,
    Phone:Number,
    Address:String
})

//creating a document
const user1=new contactModel({
    Fname:'john',
    Phone:2938283,
    Address:"IND"
})

user1.save().then((Res)=>console.log('created one user')).catch((e)=>console.log(e))


