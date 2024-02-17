const mysql = require("mysql2");

// MySQL connection pool setup
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.mysql_host,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
    database: process.env.mysql_database,
  });
  
  // Handle database connection
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection failed: " + err.message);
      process.exit(1); // Exit the application if database connection fails
    } else {
      console.log("Connected to the database");
  
      // Release the connection back to the pool
      connection.release();
    }
  });
  