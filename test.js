const axios = require("axios");
const assert = require("assert");

/*
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

*/

console.log("testing routes!");

// axios.post("http://localhost:8080/comment", {
// 	title: "Nani?!",
// 	content: "SONO CHERRY TABINAINOKA?!?!?!"
// })
// .then(function (response) {
// 	console.log("CREATED", response.data);
// 	assert(response.data.title === "Nani?!");

// 	return axios.put("http://localhost:8080/comment/" + response.data.id, {
// 		title: "MUDA MUDA",
// 		content: "KONO DIO DA!"
// 	});
// }).then(function (response) {
// 	console.log("UPDATED", response.data);

// 	return axios.get("http://localhost:8080/comment/" + response.data[0]);
// }).then(function (response) {
// 	console.log("FOUND BY ID", response.data);
// 	assert(response.data.title === "MUDA MUDA");

// 	return axios.get("http://localhost:8080/comments");
// }).then(function (response) {
// 	console.log("ALL FOUND", response.data);
// 	assert(response.data.length > 0);

// 	return axios.delete("http://localhost:8080/comment/1");
// }).then(function (response) {
// 	console.log("DELETED");
// })
// .catch(function (error) {
// 	console.log(error);
// });

axios.post("http://localhost:8080/comment", {
	title: "cakey",
	content: "tiramasudasu?",
	userId: 1
}).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.log(error);
});