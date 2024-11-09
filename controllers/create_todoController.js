// Import the TodoList model to interact with the MongoDB collection for Todo items
const TodoList = require("../models/todoModel");

// Function to create a new Todo item and save it to the database
const createTodoList = async (req, res) => {
    try {
        // Create a new Todo item using the data sent in the request body
        const createList = new TodoList(req.body);

        // Save the newly created Todo item to the database
        const savedList = await createList.save();

        // If successful, return the saved Todo item with a 201 status (Created)
        res.status(201).json(savedList);
    } catch (error) {
        // Log the error to the console for debugging
        console.error("Error creating todo list:", error);

        // If there’s an error, return a 500 status with an error message
        res.status(500).json({ error: "Failed to create todo list" });
    }
};

// Export the createTodoList function so it can be used in other parts of the application
module.exports = createTodoList;
