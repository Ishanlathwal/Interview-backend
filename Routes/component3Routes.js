const express = require("express");
const {
  getdata3,
  updateData3,
  deleteData3,
  createData3,
} = require("../Controller/component3_Controller");

const router = express.Router();

router.route("/component3").get(getdata3);

router.route("/component3/:id").patch(updateData3);

router.route("/component3/new").post(createData3);

module.exports = router;
