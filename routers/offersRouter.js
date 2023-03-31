const express = require("express");
const offers = express.Router();
const Offer = require("../models/Offer");

// //GET Create an endpoint to retrieve all offers
offers.get("/", (req, res) => {
  Offer.find({}).then((data) => res.json(data));
});

module.exports = offers;
