var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js')
function binary(){
    var size=prompt("enter size value: ");
    utility.binary(size);
}
binary();

