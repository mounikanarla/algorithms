
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//var router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));


var router = require("/home/bridgeit/Desktop/chatapp/api/router.js")
app.use('/', router);
app.use(express.static('./public'))

app.listen(5500);
console.log("Listening to port 5500");