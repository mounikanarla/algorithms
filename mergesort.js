var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js')
function mergesort(){
    var size=prompt("enter size value: ");
    if(isNaN(size))
    {
        console.log("invalid input");
    }
    else
    {
        var arr=new Array(size);
        for(var i=0;i<size;i++)
       {
        arr[i]=prompt("enter the numbers");
       }
       console.log("sorted array is  "+utility.mergesort(arr));
    }
}
    mergesort();