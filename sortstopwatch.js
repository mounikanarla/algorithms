 /**********************************************************************************************
 *  Execution       :   1. default node         cmd> node anagram.js       
 *  @purpose        : calculating elapsed time for seaching and sorting programs
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 1-09-2018
 *
 ***********************************************************************************************/
 /*returns an instance of prompt to read input from users*/
var prompt=require('prompt-sync')();
/* Including the folder address for calling the functions to main*/
var utility=require('../utility/utility.js')

function sortstopwatch(){
var size=prompt("enter size value: ");
/* calling getcurrenttime function to store start and stop values and stored in variable*/
start=utility.getcurrenttime();
/*calling the binary function in utility*/
utility.binary(size);
stop=utility.getcurrenttime();
/*elapsed time is used to print the difference of start and stop time*/
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
/* storing all the elapsed time values in an array and returning in descending order*/
var array=[elapsetime1,elapsetime2,elapsetime3,elapsetime4,elapsetime5,elapsetime6]
array=array.sort(function(a,b){
    return b-a;
});
console.log(array);

}
sortstopwatch();