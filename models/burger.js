// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  //Select all of the burger names and ids
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteTable: function(cb) {
    orm.deleteTable("burgers", function(res) {
      cb(res);
    });
  }
};
//     * Export at the end of the `burger.js` file.
// Export the database functions for the controller
module.exports = burger;
