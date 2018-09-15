//Including the readline module from package to program
var readlineSync=require('readline-sync');
// Including the folder address for calling the functions to main
var utility=require('/home/bridgeit/datastructures/main/oops/utility.js/utility.js');
//Instance of readline.Interface class is constructed from a method readline.createInterface

function invent()
{
   var size=readlineSync.question("Enter the noofshares that you want: ");
   utility.inventManage(size,readlineSync);
}
invent();