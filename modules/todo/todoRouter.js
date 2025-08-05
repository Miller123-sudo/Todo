const express = require("express");
const todoController = require("./todoController");

// Create the router
const router = express.Router();

router.route("/").get(todoController.getTodos).post(todoController.createTodo);

// Export the router
module.exports = router;
