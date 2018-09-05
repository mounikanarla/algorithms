/**********************************************************************************************
 *  Execution       :   1. default node         cmd> node anagram.js       
 *  @purpose        : comparing two strings to find anagram number
 *  @module         : anagram of two strings
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
/* @description : stringname function takes inputs as string values and gives to anagram function
 *               in utility folder
 */                  
function stringname()
{
    read.question("Enter the String1 value: ",function(string1){
        read.question("Enter the String2 value: ",function(string2){
            utility.anagram(string1,string2);
            read.close();
        })
    })
}
stringname();