//This file system module allows to work with the file system on computer.
var fs = require('fs');
// adding the utility folder to call the function
var utility=require('/home/bridgeit/datastructures/main/oops/utility.js/utility.js');
// to read the file from JSON and stored in a variable data
var data = fs.readFileSync('stock.json');

var obj=JSON.parse(data);
function stock()
{
    utility.stock(obj);
}
stock();


