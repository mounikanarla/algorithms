var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js')
function insertion(){
    var size=prompt("enter size value: ");
    var arr=new Array(size);
    for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the list of words: ");
        }
        console.log(arr);
        utility.insertion(arr);
    }
    insertion();