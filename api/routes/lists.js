const router = require("express").Router()
const verify = require("../middlewares/verifyToken")
const adminAuth = require("../middlewares/adminAuthorization")
const ListController = require("../controllers/list")

//Create list
router.post("/", verify, adminAuth, ListController.create)
//Update list
router.put("/", verify, adminAuth, ListController.update)
//Delete list
router.delete("/:id", verify, adminAuth, ListController.delete)
//Get list by type/genre
router.get("/", verify, ListController.getListByType)

module.exports = router
