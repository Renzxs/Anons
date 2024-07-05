const express = require("express");
const route = express.Router();
const messageController = require("../controllers/messageController");

route.get("/get-message", messageController.fetchMessage);

module.exports = route;