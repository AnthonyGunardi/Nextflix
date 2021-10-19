const User = require('../models/user')
const Crypto = require('../helpers/cryptojs')
const AccessToken = require('../helpers/accessToken')

class AuthController {
  static async register (req, res, next) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: Crypto.encrypt(req.body.password, process.env.SECRET_KEY)
    })
    try {
      const user = await newUser.save()
      res.status(201).json(
        { id: user._id, username: user.username, email: user.email }
      )
    } catch (err) {
        next(err)
    }
  }

  static async login (req, res, next) {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }
    try {
      const user = await User.findOne({ email: userData.email })
      if (!user) {
        res.status(401).json({ message: 'Wrong Email or Password'})
      } else {
        const originalPassword = Crypto.decrypt(user.password, process.env.SECRET_KEY)
        if (originalPassword !== userData.password) {
          res.status(401).json({ message: 'Wrong Email or Password'})
        } else {
          const payload = {
            id: user._id,
            isAdmin: user.isAdmin
          }
          const { password, ...info } = user._doc
          const accessToken = AccessToken.generate(payload)
          res.status(200).json({...info, accessToken})
        }
      }
    } catch(err) {
        next(err)
    }
  }
}

module.exports = AuthController