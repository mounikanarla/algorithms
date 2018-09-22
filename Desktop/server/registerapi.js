var express= require('express');
var app=express();
var bodyParser=require("body-parser");
var router=express.Router();
var userModel=require('./models/register');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":false}));

router.get("/",function(req,res){
    res.json({"err":false,"message":"Hello"});
});
router.route("/register")
.post(function(req,res){
    console.log("req",req.body)
    var data=new userModel();
    var response={};
    data.firstname=req.body.firstname;
    data.lastname=req.body.lastname;
    data.emailid=req.body.emailid;
    data.password=req.body.password;
    data.confirm_password=req.body.confirm_password;
    data.mobilenumber=req.body.mobilenumber;
    data.save(function(err){
        if(err){
            response={
                "error":true,
                "message":"error storing data"
            }
        }
        else{
             response={"error":false,"message":"success"}
            }
            res.json(response);
    });
});
app.use("/",router);
app.listen(3000)
    console.log("Server started on http://localhost:", port);


