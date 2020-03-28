// Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
//from the demo it seems like everything happens on the index page...
router.get("/index", function(req, res) {
  burger.all(function(data) {
    var burgObj = {
      burgers: data
    };
    console.log(burgObj);
    res.render("index", burgObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["name"], [req.body.name], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
