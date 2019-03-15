// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
  // <<<<<<< HEAD
    port: 3306,
    host: "uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "rvvknkhw2k5djv3b ",
    password: "e0dkfp23zyy34j7x",
    database: "fpkg2nd5ffnzow3y"
  // =======
  //   socketPath:"/Applications/MAMP/tmp/mysql/mysql.sock", 

  //   user: 'root',
  //   password: 'root',
  //   database: "drinks_db"
  // >>>>>>> jason
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
