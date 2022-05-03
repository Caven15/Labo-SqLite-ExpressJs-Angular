const express = require("express")
const router = express.Router()
const fournitureController = require("../controllers/fourniture.controller")

// GET /fournitures/:id
router.get("/allBy/:id", fournitureController.getAllById)

// GET /fournitures/:id
router.get("/one/:id", fournitureController.getOne)

// POST /fourniture
router.post("/", fournitureController.add)

// PATCH /fourniture/:id
router.patch("/:id", fournitureController.update)

// DELETE /fourniture/:id
router.delete("/:id", fournitureController.delete)

module.exports = router