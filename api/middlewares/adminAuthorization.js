function adminAuth (req, res, next) {
  if (req.user.isAdmin) {
    next()
  } else {
    res.status(403).json({ message: "You are unauthorized to do this action!!" })
  }
}

module.exports = adminAuth