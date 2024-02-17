var express = require("express");
var router = express.Router();
const markupController = require("../controllers/crud.controller");
const verifyAuth = require("../middlewares/cryptoToken");

/**
 * @description: For Markup Creation
 */
router.post("/create", verifyAuth, markupController.create);

router.get("*", function (req, res) {
  res.send("Markup UnKnown Route");
});

module.exports = router;
