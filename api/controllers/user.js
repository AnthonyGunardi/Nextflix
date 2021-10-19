const User = require("../models/user")
const Crypto = require('../helpers/cryptojs')

class UserController {
  static async findAll (req, res, next) {
    const query = req.query.new
      try {
        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find()
        res.status(200).json(users)
      } catch (err) {
        next(err)
      }
  }

  static async findById (req, res, next) {
    try {
      const user = await User.findById(req.params.id)
      const { password, ...info } = user._doc
      res.status(200).json(info)
    } catch (err) {
      next(err)
    }
  }

  static async update (req, res, next) {
    if (req.body.password) {
      req.body.password = Crypto.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      )
    } 
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id, { $set: req.body }, { new: true }
      )
      res.status(200).json(updatedUser)
    } catch (err) {
      next(err)
    }
  }

  static async delete (req, res, next) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "User has been deleted" })
    } catch (err) {
      next(err)
    }
  }

  static async getStats (req, res) {
    try {
      const data = await User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ])
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = UserController