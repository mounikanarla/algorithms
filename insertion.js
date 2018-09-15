var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js')
function insertion(){
    var size=prompt("enter size value: ");
    utility.insertion(size);
    }
    insertion();