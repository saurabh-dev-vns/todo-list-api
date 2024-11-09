// Import the TodoList model to interact with the MongoDB collection for Todo items
const TodoList = require("../models/todoModel");

// Function to delete a Todo item from the Todo list by its ID
const deleteTodoList = async (req, res) => {
    try {
        // Extract the Todo ID from the URL parameters (/:id)
        const getID = req.params.id;

        // Use the findByIdAndDelete method to find the Todo by its ID and delete it from the database
        const deleteTodoList = await TodoList.findByIdAndDelete(getID);

        // If the Todo item with the given ID is not found, return a 404 error
        if (!deleteTodoList) {
            return res.status(404).json({ message: `Todo list is not found on this id : ${getID}` });
        }

        // If the Todo item is deleted successfully, return a success message
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        // If there's an error during the process, return a 500 status and the error message
        res.status(500).json({ message: error.message });
    }
}

// Export the deleteTodoList function so it can be used in other parts of the application
module.exports = deleteTodoList;
