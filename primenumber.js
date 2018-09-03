var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function range()
{
    read.question("Enter the minvalue to find primenumbers: ",function(min){
        read.question("Enter the maxvalue to find primenumbers   : ",function(max){
            utility.primenumber(min,max);
            read.close();
        })
    })
}
range();