// Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
//from the demo it seems like everything happens on the index page...

// Export routes for server.js to use.
module.exports = router;
