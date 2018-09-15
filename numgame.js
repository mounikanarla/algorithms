var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function numgame()
{
    read.question("Enter the low value: ",function(low){
        read.question("Enter the high value: ",function(high){
            utility.numgame(low,high);
            read.close();
        })
    })
}
numgame();