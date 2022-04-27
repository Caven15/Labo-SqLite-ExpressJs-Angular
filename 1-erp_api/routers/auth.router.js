const express = require("express")
const router = express.Router()
const {testUser} = require("../middlewares/others")
const {logger} = require("../middlewares/auth")
const authController = require("../controllers/auth.controller")

// POST /utilisateurs
router.post("/register", testUser, authController.register)

// POST /utilisateur
router.post("/login", logger, authController.login)

module.exports = router