const express = require("express");
const offers = express.Router();
const mongoose = require("mongoose");
const Offer = require("../models/Offer");

//GET Create an endpoint to retrieve all offers
offers.get("/", (req, res) => {
  Offer.find({ })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});



offers.post("/", (req, res) => {
  const {
    offerName,
    latitude,
    longitude,
    street,
    city,
    postalCode,
    startAvailableDate,
    endAvailableDate,
    offerSize,
    pricePerHour,
    isAvailable,
  } = req.body;
  Offer.create;
});

module.exports = offers;
