var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js')
function binaryword(){
    var size=prompt("enter size value: ");
    start=utility.getcurrenttime();
    utility.binaryword(size);
    stop=utility.getcurrenttime();
    res=utility.elapsedtime(start,stop);
    console.log("elapsed time: "+res+"milliseconds");
}
binaryword();

