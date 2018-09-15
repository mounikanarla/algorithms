var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function temp()
{
    read.question("Enter C value to convert the temperature in Fahrenheit: ",function(celsius){
        read.question("Enter centigrade value: ",function(c){
            {
                utility.convert_to_f(celsius,c);
            
            }

            read.question("Enter F value to convert temperature into celsius: ",function(Fahrenheit){
                read.question("Enter Fahrenheit value: ",function(f){
                  {
                    utility.convert_to_c(Fahrenheit,f);
                  }
                })
           })
        })
    })   
}
temp();