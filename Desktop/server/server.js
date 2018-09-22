var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//var router = express.Router();

var mongoose = require('mongoose');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));


var router = require('./router.js')
app.use('/', router);


app.listen(4000);
console.log("Listening to PORT 4000");