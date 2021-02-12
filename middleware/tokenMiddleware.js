const jwt = require('jsonwebtoken');
const tokenMiddleware = (req, res, next) => {
  const { authorization } = req.headers
  if(!authorization){
    return res.status(401).json({
      error: 'Unauthorization'
    })
  }

  const temp_tokenlist = authorization.split(' ')
  if(temp_tokenlist.length !== 2){
    return res.status(401).json({
      error: 'Unauthorization'
    })
  }
  try {
    let decoded = jwt.verify(temp_tokenlist[1], process.env.ACCESS_TOKEN_HASH);
    return next();
  } catch(err) {
    return res.status(401).json({
      error: 'Unauthorization'
    })
  }
}

module.exports = tokenMiddleware
