// Import the deleteTodoList controller function, which contains the logic to delete a specific Todo item
const deleteTodoList = require("../controllers/delete_todoController");

// Import Express to use its Router functionality for modular route handling
const express = require("express");

// Create a new router object to define routes for deleting Todos
const router = express.Router();

// Define a DELETE route to remove a Todo item by its ID
// The ":id" in the URL is a route parameter that captures the ID of the Todo to delete
router.delete("/remove/:id", deleteTodoList);

// Export the router so it can be used in other parts of the application
module.exports = router;
