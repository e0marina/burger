// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wolverines06!",
    database: "burgers_db"
  });
}

// // Make connection.
// connection.connect(function(err) {
//   var sql = "DELETE FROM burgers";
//   connection.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });

//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
