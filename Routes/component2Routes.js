const express = require("express");
const {
  getdata2,
  updateData2,
  deleteData2,
  createData2,
} = require("../Controller/component2_Controller");

const router = express.Router();

router.route("/component2").get(getdata2);

router.route("/component2/:id").patch(updateData2).delete(deleteData2);

router.route("/component2/new").post(createData2);

module.exports = router;
