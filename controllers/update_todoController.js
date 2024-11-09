// Import the TodoList model to interact with the MongoDB collection for Todo items
const TodoList = require("../models/todoModel");

// Function to update a Todo item in the Todo list
const updateTodoList = async (req, res) => {
    try {
        // Extract the Todo ID from the URL parameters (/:id)
        const getID = req.params.id;

        // Extract the new data for the Todo item from the request body (form inputs)
        const getBody = req.body;

        // Use the findByIdAndUpdate method to find the Todo by its ID and update it with the new data
        // The 'new: true' option ensures the updated document is returned
        // The 'runValidators: true' option runs validation before the update
        const updateTodoList = await TodoList.findByIdAndUpdate(getID, getBody, { new: true, runValidators: true });

        // If the Todo item with the given ID is not found, return a 404 error
        if (!updateTodoList) {
            return res.status(404).json({ message: `Todo list is not found on this id : ${getID}` });
        }

        // If the update is successful, return the updated Todo item with a 200 status
        res.status(200).json(updateTodoList);
    } catch (error) {
        // If there's an error during the process, return a 400 status and the error message
        res.status(400).json({ message: error.message });
    }
}

// Export the updateTodoList function so it can be used in other parts of the application
module.exports = updateTodoList;
