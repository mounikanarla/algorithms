var usermodel=require('../models/userSchema');

/**
 * 
 * @param {*} password 
 */
function encrypt(password){
    var passWord=require('crypto')
            .createHash('sha1')
            .update(password)
            .digest('base64');
    return passWord;
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
var registration = function(req,res){
    try {
        var response = {};
        var email = req.body.email; 
        var db = new usermodel();
        console.log('email', typeof req.body.email);
        if(typeof req.body.firstname === 'undefined' || typeof req.body.lastname === 'undefined'){
             throw new Error("Name is required"); 
        } 
        if(typeof req.body.email === 'undefined'){
                throw new Error("Email address is required");
            }
        if(typeof req.body.mobile === 'undefined'){
                throw new Error("mobile number is required");
        }
        var regex = /^[0-9]+$/;
        if(!regex.test(req.body.mobile))
        {
            throw new Error("Enter valid number");
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(req.body.email))
        {
            throw new Error("some thing went wrong in email");
        }
        var re = /^[a-zA-Z]\S*$/;
        if(!re.test(req.body.firstname)||!re.test(req.body.lastname))
        {
            throw new Error("Enter correct name");
        }
        if(typeof req.body.password === 'undefined'){
            throw new Error("Password is required ");
        }
        db.username = req.body.email;
        db.firstname=req.body.firstname;
        db.lastname=req.body.lastname;
        db.email=req.body.email;
        db.password = encrypt(req.body.password);
        db.mobile=req.body.mobile;
        usermodel.find({"email":email},function(err, data){
            if(err){
                response={
                    "error":true,"message":"error","err":err
                };
                return res.status(404).send(response);
            }
            else
            {
                // save() will run insert() command of MongoDB.
                // it will add new data in collection.
                if(data.length>0) {
                    response = {"error" : true,"message" : "Mail id exist", "err":err};
                    return res.json(response);
                    // return res.status(404).send(respons
                }    
                else 
                {
                    db.save(function(err){
                        if(err)
                        {
                            console.log(err);
                            response = {"error" : true,"message" : "erroe Data "};
                        }
                        else{
                            response = {"error" : false,"message" : "added "};

                        }
                        return res.json(response); //.status(204).send(response);
                    });
                }
        }
        });
    } catch(e){
        console.log(e);
        if (e instanceof ReferenceError 
            || e instanceof TypeError
            || e instanceof SyntaxError
            || e instanceof RangeError) {
            return res.json({
                "error": true,
                "message": "Something bad happened. Please contact system administrator"
            });
        }else{
            return res.json({
                "error": true,
                "message": e.message
            });
        }
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
var login = function(req,res){
    var response={};
    var usermodel=require('../models/userSchema');
    usermodel.find({"email":req.body.email,"password":encrypt(req.body.password),"username":req.body.username},function(err,data){
     if(err)
     {
         response={"error":true,"message":"error"};
         return res.status(404).send(response);
     }
     else if(data.length>0)
          {
             response={"error": false,"message":"login successful"};   
          }
          else{
             response={"error": true,"message":"invalid login credentials"}; 
          }
          return res.status(200).send(response);
    });
}

module.exports = {
    registration: registration,
    login: login
}
