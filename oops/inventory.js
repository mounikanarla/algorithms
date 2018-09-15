var fs = require('fs');
var utility=require('/home/bridgeit/datastructures/main/oops/utility.js/utility.js');
var data = fs.readFileSync('inventory.json');
var obj=JSON.parse(data);
function inventory()
{
    utility.inventory(obj);
}
inventory();

