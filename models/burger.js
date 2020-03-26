// #### Model setup

//     * Inside `burger.js`, import `orm.js` into `burger.js`

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {};
//     * Export at the end of the `burger.js` file.
// Export the database functions for the controller
module.exports = burger;
