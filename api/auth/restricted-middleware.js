const { json } = require("express");

module.exports = (req, res, next) => {
  const token = req.headers.authorization //this pulls the token from the req
  if(!token){
    res.status(401).json("Token please!")
  }else{
    
  }

};
