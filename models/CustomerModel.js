const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://yogya:yogya1083@cluster0.hkbcf.mongodb.net/project?retryWrites=true&w=majority")
.then((res)=>console.log('connected to db'))
.catch((e)=>console.log('error in connection',e))

const contactModel=mongoose.model("ContactsCollection",{
    Fname:String,
    Phone:Number,
    Address:String
})

//creating a document
module.exports=contactModel

