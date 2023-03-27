// Importing dotenv so we are able to have a .env file and save secret information
require("dotenv").config();

// Importing express to the application
const express = require("express");

// Creating the application object from express
const app = express();

// Importing bodyParser so we are able to use json format
const bodyParser = require("body-parser");

// Creating the PORT
const PORT = process.env.PORT || 8001;

app.use(bodyParser.json());

// Initializing the server
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
