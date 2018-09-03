
var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function word()
{
    read.question("Enter the String value to search: ",function(searchword){
     if(isNaN(searchword))   
    {
        utility.word(searchword);
    }
    else
    {
       console.log("Invalid input");
       process.exit;
    }
  })
}
word();