const express = require("express");
const { getHitCounts3 } = require("../Controller/component3_Controller");

const router = express.Router();

// Routes
router.route("/hitcounts3").get(getHitCounts3);

module.exports = router;
