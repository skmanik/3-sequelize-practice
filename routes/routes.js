const path = require("path");
const db = require("../models");
const usersController = require("../controller/usersController.js");
const commentsController = require("../controller/commentsController.js");

module.exports = app => {
	console.log("Routes!");
	// get index

	// get all comments associated with a user
	app.get("/user/:id/comments", usersController.findCommentsByUser);

	// get all users
	app.get("/users", usersController.findAllUsers);
	// get user by id
	app.get("/user/:id", usersController.findUser);
	// post a user
	app.post("/user", usersController.create);
	// update a user
	app.put("/user/:id", usersController.update);
	// delete a user
	app.delete("/user/:id", usersController.delete);

	// get all comments
	app.get("/comments", commentsController.findAllComments);
	// get comment by id
	app.get("/comment/:id", commentsController.findComment);
	// post a comment
	app.post("/comment", commentsController.create);
	// update a comment
	app.put("/comment/:id", commentsController.update);
	// delete a comment
	app.delete("/comment/:id", commentsController.delete);
}