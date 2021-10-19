const router = require("express").Router()
const verify = require("../middlewares/verifyToken")
const adminAuth = require("../middlewares/adminAuthorization")
const MovieController = require("../controllers/movie")

//Get all movies
router.get("/", verify, adminAuth, MovieController.findAll)
//Get movie
router.get("/find/:id", verify, MovieController.findById)
//Get random
router.get("/random", verify, MovieController.getRandom)
//Create movie
router.post("/", verify, adminAuth, MovieController.create)
//Update movie
router.put("/:id", verify, adminAuth, MovieController.update)
//Delete movie
router.delete("/:id", verify, adminAuth, MovieController.delete)

module.exports = router
