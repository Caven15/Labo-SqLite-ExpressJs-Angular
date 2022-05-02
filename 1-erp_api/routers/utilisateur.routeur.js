const express = require("express")
const router = express.Router()
const utilisateurController = require("../controllers/uilisateur.controller")
const { verifUpdate, testUser} = require("../middlewares/others")
const {authenticateJWT} = require("../middlewares/auth")

// GET /utilisateurs
router.get("/", utilisateurController.getAll)

// GET /utilisateurs/:id
router.get("/:id", utilisateurController.getOne)

// PATCH /utilisateurs/:id
router.patch("/:id", authenticateJWT, verifUpdate, testUser, utilisateurController.update)

// DELETE /utilisateurs/:id
router.delete("/:id", utilisateurController.delete)

module.exports = router
