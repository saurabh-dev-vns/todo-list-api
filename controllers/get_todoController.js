// Import the TodoList model to interact with the MongoDB collection for Todo items
const TodoList = require("../models/todoModel");

// Function to get all Todo items from the database
const getTodoList = async (req, res) => {
    try {
        // Use the find method to retrieve all Todo items from the database
        const getTodoList = await TodoList.find();

        // If successful, return the list of Todos with a 200 status
        res.status(200).json(getTodoList);
    } catch (error) {
        // If there is an error during the database query, return a 500 status with the error message
        res.status(500).json({ message: error.message });
    }
}

// Export the getTodoList function so it can be used in other parts of the application
module.exports = getTodoList;
