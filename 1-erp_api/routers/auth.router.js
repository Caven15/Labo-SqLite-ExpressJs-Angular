const express = require("express")
const router = express.Router()
const {testUser, logger} = require("../middlewares/others")
const authController = require("../controllers/auth.controller")

// POST /utilisateurs
router.post("/register", testUser, authController.register)

// POST /utilisateur
router.post("/login", logger, authController.login)

module.exports = router