var express = require("express");
var router = express.Router();

var crudRouter = require("./crudRouter");

router.use("/v1/crud", crudRouter);

router.get("*", function (req, res) {
  res.send("Travel Persistence API Route");
});

module.exports = router;
