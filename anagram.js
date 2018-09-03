var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

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