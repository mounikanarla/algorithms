var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js')
function bubble(){
    var size=prompt("enter size value: ");
    var arr=new Array(size);
    for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the numbers");
        }
        console.log(arr);
        utility.bubble(arr);
    }
    bubble();