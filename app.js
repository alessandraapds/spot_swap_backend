// Importing dotenv so we are able to have a .env file and save secret information
require("dotenv").config();

// Requiring the client to connect with the database
require("./database/client");

// Importing express to the application
const express = require("express");

// Creating the application object from express
const app = express();

const morgan = require("morgan");

const cors = require("cors");

app.use(morgan("combined"));
app.use(cors());

// Importing bodyParser so we are able to use json format
const bodyParser = require("body-parser");

// Creating the PORT
const PORT = process.env.PORT || 8001;

// Requiring offer router to be used here
const offers = require("./routers/offersRouter");

app.use(bodyParser.json());
app.use("/offers", offers);

// Initializing the server
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
