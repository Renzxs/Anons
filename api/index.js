const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const route = require("./routes/messageRoutes.js");

const app = express();

// JSON CONFIGURATION
app.use(bodyParser.json());

// CROSS-ORIGIN RESOURCE SHARING (CORS CONFIGURATION)
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));

// DATABASE CONFIGURATION
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGODB_URL;

mongoose.connect(MONGO_URL)
.then(() => {
    console.log("Database Connected Successfully");

    // SERVER PORT CONFIGURATION
    app.listen(PORT, () => {
        console.log(`SERVER RUNNING ON PORT ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});

// ROUTES
// Default Server Route
app.get("/", (req, res) => {
    res.status(201).json({"message": "Server is working just fine! No worries!"});
});

app.use("/anons/message", route);