var express = require("express");
var router = express.Router();
const crudController = require("../controllers/crud.controller");
// const verifyAuth = require("../middlewares/cryptoToken");

/**
 * @description: For testing crud operations
 */
router.get("/fetch", crudController.fetch);

router.post("/create", crudController.fetch);

router.get("*", function (req, res) {
  res.send("CRUD UnKnown Route");
});

module.exports = router;
