// Import the updateTodoList controller function to handle the update logic for a specific Todo item
const updateTodoList = require("../controllers/update_todoController");

// Import Express to use its Router functionality for modular route handling
const express = require("express");

// Create a new router object to define routes for updating Todos
const router = express.Router();

// Define a PATCH route to update a Todo item by its ID
// The ":id" in the URL is a route parameter that will capture the ID of the Todo to update
router.patch("/update/:id", updateTodoList);

// Export the router so it can be used in other parts of the application
module.exports = router;
