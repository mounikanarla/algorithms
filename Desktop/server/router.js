var express= require('express');
var router=express.Router();
var app = express();
var users=require('../server/controller/usercontroller');
// console.log("users",users.registration);
router.post("/login", users.login);
router.post('/register', users.registration);
app.use('/', router);

// ConnectDB();

module.exports=router;