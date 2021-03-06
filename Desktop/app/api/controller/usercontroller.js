// Importing userSchema from models
var usermodel=require('../models/userSchema');
var jwt=require('jsonwebtoken');
/*
 * @function: function is used to encript the given argument
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
 * @function:function is used to define the registration form with two parameters request and result 
 * @param {*} req 
 * @param {*} res 
 */
var registration = function(req,res){
    try {
        // creating a variable to store response
        var response = {};
        var email = req.body.email; 
        // declaring the variable for creating a usermodel for database 
        var db = new usermodel();
        // console.log('email', typeof req.body.email);
        // if the first and last names are not declared then it throw new error
        if(typeof req.body.firstname === 'undefined' || typeof req.body.lastname === 'undefined'){
             throw new Error("Name is required"); 
        } 
        // if email is not declared then it throw new error
        if(typeof req.body.email === 'undefined'){
                throw new Error("Email address is required");
        }
         // if mobile number is not declared then it throw new error
        if(typeof req.body.mobile === 'undefined'){
                throw new Error("mobile number is required");
        }
        // to validate mobile number from 0-9
        var regex = /^[0-9]+$/;
        if(!regex.test(req.body.mobile))
        {
            throw new Error("Enter valid number");
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(req.body.email))
        {
            throw new Error("Something went wrong in email");
        }
        var re = /^[a-zA-Z]{3,20}\S$/;
        if(!re.test(req.body.firstname)||!re.test(req.body.lastname))
        {
            throw new Error("Something went wrong in name");
        }
        var re = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
        if(!re.test(req.body.password))
        {
            throw new Error("password should contain atleast 8 characters with atleast 1 special charcter,1 numeric,1 Capital and small alphabet");
        }
       
        if(typeof req.body.password === 'undefined'){
            throw new Error("Password is required ");
        }
        db.username = req.body.email;
        db.firstname=req.body.firstname;
        db.lastname=req.body.lastname;
        db.email=req.body.email;
        db.username=req.body.email;
        db.password = encrypt(req.body.password);
        db.mobile=req.body.mobile;
        usermodel.find({"email":email},function(err, data){
            // var hashedPassword = bcrypt.hashSync(req.body.password, 8);
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
                    // return res.status(404).send(response);
                }    
                else 
                {
                    db.save(function(err){
                        if(err)
                        {
                            
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
 try{
        var response={};
        var secret="qwertpoiuytasdfg1234589";
        usermodel.find({"email":req.body.email,"password":encrypt(req.body.password)},function(err,data){
        if(err)
        {
            response={"error":true,"message":"error"};
            return res.json(response);
        }
     
        else if(data.length>0)
            {
                var token=jwt.sign({email:req.body.email,password:req.body.password},secret,{expiresIn:86400}); // expires in 24 hours})
                response={"error": false,"token":token,"message":"login successful"}; 
            }
            else
            {
                response={"error": true,"message":"invalid login credentials"};  
            }
            return res.json(response);
    
         });
    } catch(e){
        console.log(e);
        if (e instanceof ReferenceError 
            || e instanceof TypeError
            || e instanceof SyntaxError
            || e instanceof RangeError) {
            return res.json({
                "error": true,
                "message": "Something bad is happened at login page"
            });
        }else{
            return res.json({
                "error": true,
                "message": e.message
            })
        }
    }
}

module.exports = {
    registration: registration,
    login: login
}
