import mysql from "mysql2";

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "employeems",
// });

const con = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "employeems",
});


con.connect(function (err) {
  if (err) {
    console.log("connection error");
  } else {
    console.log("Connected");
  }
});

export default con;
