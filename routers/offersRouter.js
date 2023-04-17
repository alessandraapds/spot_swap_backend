const express = require("express");
const offers = express.Router();
const mongoose = require("mongoose");
const Offer = require("../models/Offer");

//GET Create an endpoint to retrieve all available offers
offers.get("/", (req, res) => {
  Offer.find({ isAvailable: true })
    .sort({ createdAt: -1 })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//GET Create an endpoint to retrieve all available and unavailable offers
offers.get("/alloffers", (req, res) => {
  Offer.find({})
    .sort({ createdAt: -1 })
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
    userId,
    offerName,
    street,
    city,
    country,
    offerSize,
    price,
    availableFrom,
    availableUntil,
    isAvailable,
    createdAt,
  } = req.body;
  Offer.create({
    userId,
    offerName,
    street,
    city,
    country,
    offerSize,
    price,
    availableFrom,
    availableUntil,
    isAvailable,
    createdAt,
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
  const { isAvailable } = req.body;
  Offer.findByIdAndUpdate(
    id,
    {
      isAvailable,
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
