var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function root()
{
    read.question("Enter the number to find square root: ",function(c){
            utility.sqrt(c);
            read.close();
    })
}
root();