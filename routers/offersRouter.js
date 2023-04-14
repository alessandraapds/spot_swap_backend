const express = require("express");
const offers = express.Router();
const mongoose = require("mongoose");
const Offer = require("../models/Offer");

//GET Create an endpoint to retrieve all offers
offers.get("/", (req, res) => {
  Offer.find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//GET Create an endpoint to retrieve a specific offer based on id
offers.get("/:id", (req, res) => {
  const id = req.params.id;
  Offer.findById(id)
    .then((data) => {
      if (!data) {
        // Send 404 if no film is found with the specified _id
        return res.sendStatus(404);
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});

//UPDATE Create an endpoint to create a new offer
offers.post("/", (req, res) => {
  const {
    offerName,
    street,
    city,
    country,
    offerSize,
    price,
    availableFrom,
    availableUntil,
  } = req.body;
  Offer.create({
    offerName,
    street,
    city,
    country,
    offerSize,
    price,
    availableFrom,
    availableUntil,
  })
    .then((data) => res.json(data))
    .catch((e) => {
      console.log(e.message);
      res.sendStatus(404);
    });
});

//DELETE Create an endpoint to delete an offer based on id
offers.delete("/:id", (req, res) => {
  const id = req.params.id;
  Offer.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        // Send 404 if no film is found with the specified _id
        return res.sendStatus(404);
      }
      res.sendStatus(204);
    })
    .catch((e) => {
      console.log(e.message);
      res.sendStatus(404);
    });
});

//UPDATE/PUT Create an endpoint to update an offer based on id
offers.put("/:id", (req, res) => {
  const id = req.params.id;
  const { startAvailableDate, endAvailableDate, pricePerHour } = req.body;
  Offer.findByIdAndUpdate(
    id,
    {
      startAvailableDate,
      endAvailableDate,
      pricePerHour,
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        // Send 404 if no film is found with the specified _id
        return res.sendStatus(404);
      }
      res.json(data);
    })
    .catch((e) => {
      console.log(e.message);
      res.sendStatus(404);
    });
});

module.exports = offers;
