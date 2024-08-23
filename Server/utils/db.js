import mysql from "mysql2";
import dotenv from "dotenv";

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "employeems",
// });
dotenv.config()
const con = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "employeems",
});
console.log(process.env.DB_HOST, process.env.DB_USERNAME, process.env.DB_PASSWORD, process.env.DB_NAME);



// con.connect(function (err) {
//   if (err) {
//     console.log("connection error");
//   } else {
//     console.log("Connected");
//   }
// });

con.connect(function (err) {
  if (err) {
    console.error("Connection error: ", err.message);
  } else {
    console.log("Connected");
  }
});


export default con;
