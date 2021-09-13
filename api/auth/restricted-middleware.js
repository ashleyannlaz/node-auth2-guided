const jwt = require('jsonwebtoken')
const {TOKEN_SECRET} = require('../../config/secrets')

module.exports = (req, res, next) => {
  // server expects to find the token in Authorization
  const token = req.headers.authorization
  if(token) {
    jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
      if (error) {
        next({status: 401, message: `token bad: ${error.message}`})
      }else { 
        req.decodedJwt = decoded
        next()
      }
    })
  } else {
    next({status: 401, message: 'we need token!'})
  }

};
