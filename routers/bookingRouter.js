const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Booking = require("../models/booking");

// //GET Create an endpoint to retrieve all bookings
router.get("/", (req, res) => {
  Booking
    .find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
