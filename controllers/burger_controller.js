var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObj = {
      burgers: data
    };
    // console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/:burger_name", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      console.log("router working");

      // res.json({ id: result.insertId });
      res.redirect("/");
    }
  );
});

router.post("/:id", function(req, res) {
  var condition = "id= " + req.params.id;
  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: true
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
