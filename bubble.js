var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js')
function bubble(){
        var size=prompt("enter size value: ");
        utility.bubble(size);
    }
    bubble();