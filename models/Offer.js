const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  // offerName, street, city, country, offerSize, price, availableFrom, availableUntil

  offerName: {
    type: String,
    required: true,
  },
  // latitude: {
  //   type: Number,
  //   required: true,
  // },
  // longitude: {
  //   type: Number,
  //   required: true,
  // },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  offerSize: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableFrom: {
    type: Date,
    required: true,
  },
  availableUntil: {
    type: Date,
    required: true,
  },
});

const Offer = mongoose.model("Offer", OfferSchema);
module.exports = Offer;
