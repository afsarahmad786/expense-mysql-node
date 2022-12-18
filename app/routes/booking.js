const path = require("path");

const express = require("express");

const bookingcontroller = require("../controllers/demo");

const router = express.Router();

router.get("/", bookingcontroller.getuser);

router.post("/expenses", bookingcontroller.adduser);
router.get("/expenses", bookingcontroller.getalluser);

router.delete("/expenses/:userid", bookingcontroller.deleteuser);
module.exports = router;
