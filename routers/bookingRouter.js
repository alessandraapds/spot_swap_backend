const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const booking = require("../models/booking");

// //GET Create an endpoint to retrieve all bookings
router.get("/", (req, res) => {
  booking
    .find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Post an endpoint that creates a new booking in bookings collections
router.post("/newBooking", (req, res) => {
  const { user_id, spot_id, start_time, end_time, booking_status, total_cost } =
    req.body;
  booking
    .create({
      user_id,
      spot_id,
      start_time,
      end_time,
      booking_status,
      total_cost,
    })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//GET an endpoint to retrieve a specific booking based on booking_status : pending or booked
router.get("/:status", (req, res) => {
  const status = req.params.status;
  const filter = { booking_status: status };
  booking
    .find(filter)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});
// router.get("/pending", (req, res) => {
//   const filter = { booking_status: "pending" };
//   booking
//     .find(filter)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//       res.sendStatus(500);
//     });
// });

//GET an endpoint to retrieve a specific booking based on booking id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  booking
    .findById(id)
    .then((data) => {
      if (!data) {
        // Send 404 if no booking is found with the specified _id
        return res.sendStatus(404);
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});
// PUT Create an endpoint that updates an existing booking in bookings collection
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { start_time, end_time, booking_status } = req.body;
  booking
    .findByIdAndUpdate(
      id,
      {
        start_time,
        end_time,
        booking_status,
      },
      { new: true }
    )
    .then((data) => {
      if (!data) {
        return res.sendStatus(404);
      }
      res.json(data);
    })
    .catch((e) => {
      console.log(e.message);
      res.sendStatus(404);
    });
});

// DELETE Create an endpoint that DELETES an existing booking in booking collection
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  booking
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        // Send 404 if  booking is Not found with the specified _id
        return res.sendStatus(404);
      }
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err.message);
      res.sendStatus(500);
    });
});

module.exports = router;
