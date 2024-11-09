// Import the Express framework to create a router for handling routes
const express = require("express");

// Import the getTodoList controller to handle the logic for retrieving the list of Todos
const getTodoList = require("../controllers/get_todoController");

// Create a new router instance for defining route paths
const router = express.Router();

// Define a GET route to retrieve all Todo items
// The "/get" endpoint triggers the getTodoList function to return Todo items
router.get("/get", getTodoList);

// Export the router so it can be used in other parts of the application
module.exports = router;
