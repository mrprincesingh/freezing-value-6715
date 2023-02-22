var jwt = require('jsonwebtoken');

const check = (req ,res , next)=>{
  const token = req.headers.authorization
  if(token){
    const decoded = jwt.verify(token , "karatlogin")
    if(decoded){
      
        const userID = decoded.userID
        req.userDetails = decoded
        console.log(decoded)
        req.body.userID = userID
        next()
    }else{
        res.send({"msg":"please login"})
    }
  }else{
    res.send({"msg":"please login"})
  }
}

module.exports={
    check
}