const router = require("express").Router()
const verify = require("../middlewares/verifyToken")
const authorization = require('../middlewares/userAuthorization')
const adminAuth = require('../middlewares/adminAuthorization')
const UserController = require("../controllers/user")

//Get all users
router.get("/", verify, adminAuth ,UserController.findAll)
//Get user
router.get("/find/:id", verify, UserController.findById)
//Update user
router.put("/:id", verify, authorization, UserController.update)
//Delete user
router.delete("/:id", verify, authorization ,UserController.delete)
//Get user stats
router.get("/stats", UserController.getStats)

module.exports = router
