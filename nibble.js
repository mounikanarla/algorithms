var readlineSync=require('readline-sync');
var utility = require('../utility/utility.js')
function nibble()
{
    var bin=readlineSync.question("enter decimal value: ");
    var res=utility.toBinary(bin);
    var newvalue=utility.nibble(res);
    var newdec=utility.Binary(newvalue);
    console.log("New number of the given decimal value is"+newdec);
    var power=utility.checkpow(newdec)
    if(power>0)
    {
     console.log(`2 power ${(power)} is`+newdec);
    }
    else{
        console.log(newdec+"is not a power of 2 value");
    }
}
nibble();