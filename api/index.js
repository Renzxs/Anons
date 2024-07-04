const express = require("express");
const app = express();

const dotenv = require("dotenv").config();

// JSON CONFIGURATION
app.use(express.json());

// CROSS-ORIGIN RESOURCE SHARING (CORS CONFIGURATION)
const cors = require("cors");
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

// APIs 
app.get("/", (req, res) => {
    res.status(201).json({"message": "Server is working just fine! No worries!"});
});


// SERVER PORT CONFIGURATION
const PORT = 5001;

app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT 5001");
});