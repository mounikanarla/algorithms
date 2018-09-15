
var utility=require("/home/bridgeit/datastructures/main/oops/utility.js/utility.js")
var readlineSync=require('readline-sync');
function regExp()
{
  var name=readlineSync.question("Enter your name: ");
  if(isNaN(name)==false)
  {
      console.log("Re-Enter your name: ");
      var name=readlineSync.question("Enter your name: ");
  }
  var fullname=readlineSync.question("Enter your fullname: ");
  if(isNaN(fullname)==false)
  {
      console.log("Re-Enter your fullname: ");
      var fullname=readlineSync.question("Enter your fullname: ");
  }
  var number=readlineSync.question("Enter your mobile number: ");
  var num=parseInt(number);
  if(isNaN(num)==true || number.length!=10)
  {
      console.log("Re-Enter your number: ");
      var number=readlineSync.question("Enter your number: ");
  }
  var date=new Date();
  var pre_Date=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  utility.regExp(name,fullname,number,pre_Date);

}
regExp();