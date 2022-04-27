const express = require("express")
const router = express.Router()
const utilisateurController = require("../controllers/uilisateur.controller")
const {authenticateJWT} = require("../middlewares/others")

// GET /utilisateurs
router.get("/", utilisateurController.getAll)

// GET /utilisateurs/:id
router.get("/:id", utilisateurController.getOne)

// PATCH /utilisateurs/:id
router.patch("/:id", authenticateJWT, utilisateurController.update)

// DELETE /utilisateurs/:id
router.delete("/:id", utilisateurController.delete)

module.exports = router
