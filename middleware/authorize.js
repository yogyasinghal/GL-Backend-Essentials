const jwt=require('jsonwebtoken')
function authorize(req,res,next){
    const inputtoken=req.headers.authorization;
    console.log("authorize middleware", inputtoken);
    const token=inputtoken.replace('Bearer ','')
    try{
    const result=jwt.verify(token,'jamesbond')
    console.log(result)
    next()
    }
    catch(e){
        console.log(e.message)
       res.status(404).send({"msg":'you are not authorized',"reason":e.message}) 
    }
}
module.exports=authorize;