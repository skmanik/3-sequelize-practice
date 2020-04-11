const express = require("express");
const bodyParser = require("body-parser");
const setUpRoutes = require("./routes/routes.js");

// express
const app = express();
const PORT = process.env.PORT || 8080;

// db
const db = require("./models");

// middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// static
app.use(express.static("public"));

// routes
setUpRoutes(app);

// sync sqlize models and start express
db.sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT);
    });
});