const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
//username, password, first name, last name, contact email

    "username": {
      "type": "string",
      "required": true,
      "unique": true
    },
    "password": {
      "type": "string",
      "required": true
    },
    "firstName": {
      "type": "string",
      "required": true
    },
    "lastName": {
      "type": "string",
      "required": true
    },
    "contactEmail": {
      "type": "string",
      "required": true,
      "unique": true
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
