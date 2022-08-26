const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://cram_js:cramjs@cluster0.zdsqd.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log('connected to db')).catch((e)=>console.log('error in connection',e))

const contactModel=mongoose.model("usercollection",{
    fname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,   
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    role:{
        type:String,
        default:"user",
        enum:['user','admin'],
        required:true
    }
})

//creating a document
module.exports=contactModel

