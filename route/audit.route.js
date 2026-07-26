const express = require("express");
const router = express.Router();

const auditController = require("../controller/audit.controller");

router.post("/audit", auditController.auditController);

module.exports = router;