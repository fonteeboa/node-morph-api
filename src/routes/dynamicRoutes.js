const express = require("express");
const router = express.Router();
const validateTable = require("../middlewares/validateTable");
const controller = require("../controllers/dynamicController");

router.get("/:table", validateTable, controller.getAll);
router.get("/:table/:id", validateTable, controller.getOne);
router.post("/:table", validateTable, controller.create);
router.put("/:table/:id", validateTable, controller.update);
router.delete("/:table/:id", validateTable, controller.delete);

module.exports = router;
