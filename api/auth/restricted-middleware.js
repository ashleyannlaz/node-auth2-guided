const jwt = require("jsonwebtoken")
const {} = require("../../config/secrets.js")

module.exports = (req, res, next) => {
  const token = req.headers.authorization //this pulls the token from the req
  if(!token){
    res.status(401).json("Token please!")
  }else{
    jwt.verify(token,"keepitsafe",(err,decoded)=>{
      if(err){
        res.status(401).json("Token is bad " + err.message)
      }
      else{
        req.decodedToken = decoded
        next()
      }
    })
  }

};
