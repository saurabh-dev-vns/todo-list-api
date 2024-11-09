// Import the Express framework to create a router for handling routes
const express = require("express");

// Import the createTodoList controller, which contains the logic to create a new Todo item
const createTodoList = require("../controllers/create_todoController");

// Create a new router instance for defining route paths
const router = express.Router();

// Define a POST route to create a new Todo item
// The "/create" endpoint triggers the createTodoList function to handle the creation logic
router.post("/create", createTodoList);

// Export the router so it can be used in other parts of the application
module.exports = router;
