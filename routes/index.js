var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  var a = req.body.aaa;
  var b = req.body.bbb;
  res.send({ title: a,nr:b });

});

module.exports = router;
