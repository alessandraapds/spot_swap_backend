const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  // offerName, latitude, longitude, street, city, postalCode, startAvailableDate, endAvailableDate, offerSize,
  // pricePerHour, isAvailable

  offerName: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
  startAvailableDate: {
    type: Date,
    required: true,
  },
  endAvailableDate: {
    type: Date,
    required: true,
  },
  offerSize: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

const Offer = mongoose.model("Offer", OfferSchema);
module.exports = Offer;
