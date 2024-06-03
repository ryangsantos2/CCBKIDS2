var express = require("express");
var router = express.Router();

var freqController = require("../controllers/freqController");

router.post("/armazenar", function (req, res) {
    freqController.armazenar(req, res);
})

module.exports = router;