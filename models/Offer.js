const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const OfferSchema = new mongoose.Schema({
  // userId, offerName, street, city, country, offerSize, price, availableFrom, availableUntil

  userId: {
    type: ObjectId,
    required: true,
  },
  offerName: {
    type: String,
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
