const express = require("express")
const router = express.Router()
const fournitureController = require("../controllers/fourniture.controller")

// GET /fournitures/:id
router.get("/:id", fournitureController.getAllById)

// POST /fourniture
router.post("/", fournitureController.add)

// PATCH /fourniture/:id
router.patch("/:id", fournitureController.update)

// DELETE /fourniture/:id
router.delete("/:id", fournitureController.delete)

module.exports = router