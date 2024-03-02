const express = require("express");
const {
  getdata1,
  updateData1,
  createData1,
} = require("../Controller/component1_Controller");

const router = express.Router();

// Define routes for handling component1 data

router.route("/component1").get(getdata1);

router.route("/component1/:id").patch(updateData1);

router.route("/component1/new").post(createData1);

module.exports = router;
