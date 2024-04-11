var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

router.get("/dasdasd", function (req, res, next) {
  res.send({ title: "Express" });
});
router.get("/test", function (req, res, next) {
  res.send({ title: "Express" });
});

module.exports = router;
