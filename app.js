const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

// Importing index.js
const indexRouter = require("./routs/index");
app.use("", indexRouter);

app.listen(PORT, (req, res) => {
  console.log("hello................");
  console.log(`Server is running on port ${PORT}`);
});
