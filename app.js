// Requiring the client to connect with the database
require("./database/client");

// Importing express to the application
const express = require("express");

// Creating the application object from express
const app = express();

const morgan = require("morgan");

app.use(morgan("combined"));

// Importing bodyParser so we are able to use json format
const bodyParser = require("body-parser");

// Creating the PORT
const PORT = process.env.PORT || 8001;

// Requiring offer router to be used here
const offers = require("./routers/offersRouter");
// Requiring booking router to be used here
const booking = require("./routers/bookingRouter");

app.use(bodyParser.json());
app.use("/offers", offers);
app.use("/booking", booking);

// Initializing the server
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
