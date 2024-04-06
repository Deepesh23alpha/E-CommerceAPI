// ---Importing package---
const mongoose = require("mongoose");

// Connecting to the database.
mongoose.connect("mongodb://0.0.0.0:27017/eCommerceAPI");

// Setting it up to the database.
const db = mongoose.connection;

// ---Checking connection---

// If it fails to connect. 
db.on("error", console.error.bind(console, "Error connecting to the database!"));

// When it gets connected.
db.once("open", function(){
    console.log("Successfully connected to DB!");
});

// ---Exporting DB---
module.exports = db;