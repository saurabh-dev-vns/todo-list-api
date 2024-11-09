// Import the mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Import environment variables from the .env file using dotenv package
require("dotenv").config();

// Get the MongoDB URI from environment variables (MONGO_URI) to securely store connection string
const MONGO_URI = process.env.MONGO_URI;

// Function to establish a connection to the MongoDB database
const connect_DB = () => {
    // Use mongoose.connect() to connect to the database with the MONGO_URI
    mongoose.connect(MONGO_URI)
    .then(() => {
        // If the connection is successful, log a success message
        console.log("Database is connected");
    })
    .catch((err) => {
        // If there is an error during connection, log the error message
        console.error("Unable to connect to the database", err);
    });
}

// Export the connect_DB function so it can be used in other parts of the application
module.exports = { connect_DB };
