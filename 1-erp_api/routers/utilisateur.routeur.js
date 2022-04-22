const express = require("express")
const router = express.router()
const utilisateurController = require("../controllers/uilisateur.controller")


// GET /utilisateurs
router.get("/", utilisateurController.getAll)

// GET /utilisateurs/:id
router.get("/:id", utilisateurController.getOne)

// POST /utilisateurs
router.post("/", utilisateurController.add)

// PATCH /utilisateurs/:id
router.patch("/:id", utilisateurController.update)

// DELETE /utilisateurs/:id
router.delete("/:id", utilisateurController.delete)
