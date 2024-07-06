const express = require("express");
const route = express.Router();
const messageController = require("../controllers/messageController");

route.get("/get-message", messageController.fetchMessage);
route.post("/create-message", messageController.createMessage);
route.delete("/delete-message/:id", messageController.deleteMessage);
route.put("/edit-message/:id", messageController.editMessage);

module.exports = route;