module.exports = (role)=>(req,res,next)=>{
    if(req.decodedToken.role === role){
        next()
    }
}