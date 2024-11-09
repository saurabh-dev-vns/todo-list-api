// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the Express framework to create an API server
const express = require("express");

const cors = require('cors');

// Import the database connection function from the configuration file
const { connect_DB } = require("./config/db_config");

// Import route handlers for CRUD operations on Todos
const createTodoRoutes = require("./routes/create_todoRoutes");
const getTodoRoutes = require("./routes/get_todoRoutes");
const updateTodoRoutes = require("./routes/update_todoRoutes");
const deletetTodoRoutes = require("./routes/delete_todoRoutes");

// Connect to the database using the imported function
connect_DB();

// Define allowed origins for development and production
const allowedOrigins = {
    development: [process.env.DEVELOPMENT_URI], // e.g., React or Vue.js development server
    production: [process.env.PRODUCTION_URI], // e.g., your production domain
};

// Determine the environment
const environment = process.env.NODE_ENV || 'development';

// CORS options based on the environment
const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests with no origin (mobile apps, Postman, etc.)
        if (!origin) return callback(null, true);

        const allowedOriginsForEnv = allowedOrigins[environment];
        if (allowedOriginsForEnv.indexOf(origin) !== -1) {
            return callback(null, true);
        } else {
            return callback(new Error('Not allowed by CORS'));
        }
    },
};

// Set the server port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Initialize the Express app
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", allowedOrigins[environment]);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Use CORS middleware with the dynamic options
app.use(cors(corsOptions));

app.get("/",(re,res)=>{
    res.send("Server is running.")
})

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define routes for each CRUD operation, prefixed with '/api'
app.use('/api', createTodoRoutes);
app.use('/api', getTodoRoutes);
app.use('/api', updateTodoRoutes);
app.use('/api', deletetTodoRoutes);

// Start the server on the specified port and log a confirmation message
app.listen(PORT, () => {
    console.log(`Server is started on port: ${PORT}`);
});
