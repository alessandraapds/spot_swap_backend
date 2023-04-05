const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const bookingSchema = new mongoose.Schema({
  // user_id,spot_id ,start_time, end_time, booking_status,total_cost

  user_id: {
    type: ObjectId,
    required: false,
  },
  spot_id: {
    type: ObjectId,
    required: false,
  },
  start_time: {
    type: Date,
    required: false,
  },
  end_time: {
    type: Date,
    required: true,
  },
  booking_status: {
    type: String,
    required: true,
  },
  total_cost: {
    type: Number,
    required: true,
  },
});

const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;
