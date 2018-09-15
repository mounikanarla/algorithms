var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function machine()
{
    read.question("Enter the amount: ",function(amount){
            utility.vendmachine(amount);
            read.close();
    })
}
machine();