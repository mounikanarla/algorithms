var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js')
function binary(){
    var size=prompt("enter size value: ");
    start=utility.getcurrenttime();
    utility.binary(size);
    stop=utility.getcurrenttime();
    res=utility.elapsedtime(start,stop);
    console.log("elapsed time: "+res+"milliseconds");
}
binary();

