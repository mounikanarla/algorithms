var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js')
function sortstopwatch(){
var size=prompt("enter size value: ");

start=utility.getcurrenttime();
utility.binary(size);
stop=utility.getcurrenttime();
elapsetime1=utility.elapsedtime(start,stop);
console.log("elapsed time: "+elapsetime1+"milliseconds");

start=utility.getcurrenttime();
utility.binaryword(size);
stop=utility.getcurrenttime();
elapsetime2=utility.elapsedtime(start,stop);
console.log("elapsed time: "+elapsetime2+"milliseconds");

start=utility.getcurrenttime();
utility.bubble(size);
stop=utility.getcurrenttime();
elapsetime3=utility.elapsedtime(start,stop);
console.log("elapsed time: "+elapsetime3+"milliseconds");

start=utility.getcurrenttime();
utility.bubbleword(size);
stop=utility.getcurrenttime();
elapsetime4=utility.elapsedtime(start,stop);
console.log("elapsed time: "+elapsetime4+"milliseconds");

start=utility.getcurrenttime();
utility.insertion(size);
stop=utility.getcurrenttime();
elapsetime5=utility.elapsedtime(start,stop);
console.log("elapsed time : "+elapsetime5+" milliseconds");

start=utility.getcurrenttime();
utility.insertionword(size);
stop=utility.getcurrenttime();
elapsetime6=utility.elapsedtime(start,stop);
console.log("elapsed time : "+elapsetime6+" milliseconds");

var array=[elapsetime1,elapsetime2,elapsetime3,elapsetime4,elapsetime5,elapsetime6]
array=array.sort(function(a,b){
    return b-a;
});
console.log(array);

}
sortstopwatch();