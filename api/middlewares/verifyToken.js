const AccessToken = require("../helpers/accessToken")

function verify(req, res, next) {
  const authHeader = req.headers.token
  if (authHeader) {
    const token = authHeader.split(" ")[1]
    AccessToken.verify(token, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token is not valid!" })
      } else {
        req.user = user
        next()
      }
    })
  } else {
    return res.status(401).json({ message: "Please login first!" })
  }
}

module.exports = verify
