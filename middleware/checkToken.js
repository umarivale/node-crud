const express = require('express');
const app = express();

const checkToken = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY, (err,user) => {
    console.log(err)
    if(err)
    {
        return res.sendStatus(403)
    }
    else{
        req.body.logedIn=true;
        next();
    }

})
}
module.exports = checkToken;