var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function interest()
{
    read.question("Enter the principal amount: ",function(Principal){
        read.question("Enter monthly payments for that how many years you want to calulate : ",function(Year){
            read.question("Enter rate of interest: ",function(Rate){
                utility.payment(Principal,Year,Rate);
                read.close();
            })    
        })
    })
}
interest();