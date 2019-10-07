// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const express = require("express");
const path = require("path");


//express server
let app = express();
// Sets an initial port.
const PORT = process.env.PORT || 8080;

//Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// // =============================================================================
// // LISTENER
// // =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});