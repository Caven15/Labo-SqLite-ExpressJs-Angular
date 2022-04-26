const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")

// POST /utilisateurs
router.post("/", authController.register)

// POST /utilisateur
router.post("/", authController.login)



module.exports = router