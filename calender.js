var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function day()
{
    read.question("Enter the year: ",function(year){
        read.question("Enter the month: ",function(month){
            read.question("Enter the day: ",function(day){
               utility.calender(year,month,day);
               read.close();
            })
        })

    })
}
day();