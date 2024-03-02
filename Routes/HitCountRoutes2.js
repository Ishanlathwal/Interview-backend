const express = require("express");
const { getHitCounts2 } = require("../Controller/component2_Controller");

const router = express.Router();

// Routes
router.route("/hitcounts2").get(getHitCounts2);

module.exports = router;
