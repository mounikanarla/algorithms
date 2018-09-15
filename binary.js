var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function  binary()
{
    read.question("Enter the decimal value: ",function(decimal){

           var value=utility.getbinary(decimal);
            console.log(value.join(""));
            read.close();
    })
}
binary();