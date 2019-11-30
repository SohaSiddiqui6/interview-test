// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes");
const bootstrap = require("./src/bootstrap");

// create an instance of express to serve our end points
const app = express();

// bootstrap app and populate the data
bootstrap();

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  Connect all our routes to our application
app.use("/api/v1", routes);

// finally, launch our server on port 3001.
const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});
