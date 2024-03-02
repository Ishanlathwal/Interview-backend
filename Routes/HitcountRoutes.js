const express = require("express");

const { getHitCounts1 } = require("../Controller/component1_Controller");

const router = express.Router();

// Routes
router.route("/hitcounts").get(getHitCounts1);

module.exports = router;
