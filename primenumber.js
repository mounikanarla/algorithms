/**********************************************************************************************
 *  Execution       :   1. default node         cmd> node primenumber.js       
 *  @purpose        : Display the primenumbers in the range of one to thousand
 *  @module         : primenumbers within the given range
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 30-08-2018
 *
 ***********************************************************************************************/
/*Including the readline module from package to program*/
var readline=require('readline');
/* Including the folder address for calling the functions to main*/
var utility=require('../utility/utility.js');
/*Instance of readline.Interface class is constructed from a method readline.createInterface*/
var read=readline.createInterface({
/*Every instance of readline consists of one readble input and writable input*/  
    input:process.stdin,
    output:process.stdout
});
/*
* @description : range function takes the range of the primenumber and gives to the primenumber
*                function in utility  
*/
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