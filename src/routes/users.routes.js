const express = require("express")
const userController = require("../controllers/userController")
const { isLogged } = require("../middlewares/auth")
const router = express.Router()
const upload = require("../configs/multer")
router
    .route("/")
    .get(userController.all)
    .post(userController.create)

router
    .route("/:id")
    .get(isLogged, userController.one)
    .put(userController.update)
    .delete(userController.delete)

router
    .route("/image/:id")
    .put(upload.single('image'), userController.updateImage)

router
    .route("/login")
    .post(userController.login)

module.exports = router