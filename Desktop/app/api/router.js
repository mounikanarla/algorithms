var express= require('express');
var router=express.Router();
var app = express();
var users=require("../../chatapp/api/controller/usercontroller");
// console.log("users",users.registration);
router.post("/login", users.login);
router.post('/register', users.registration);
// ConnectDB();

module.exports=router;