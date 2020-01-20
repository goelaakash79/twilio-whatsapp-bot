const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index_controller");

router.get("/receive_message", indexController.index);

module.exports = router;
