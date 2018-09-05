
/**********************************************************************************************
 *  Execution       :   1. default node         cmd> node palindrome.js       
 *  @purpose        : Findind the anagram numbers and palindromes of the given range of primenumbers
 *  @module         : palindromes of primenumbers in a range
 *  @author         : mounika<nmounika358@gmail.com>
 *  @version        : 10.9.0
 *  @since          : 30-08-2018
 *
 ***********************************************************************************************/
/*Including the readline module from package to program*/
var readline=require('readline');
/* Including the folder address for calling the functions to main*/
var utility=require('../utility/utility.js');
/*Instance of readline.Interface class is constructed from a method readline.createInterface*/
var read=readline.createInterface({
/*Every instance of readline consists of one readble input and writable input*/  
    input:process.stdin,
    output:process.stdout
});
/*
* @description : taking the values and finding the palindromes of a given number 
*/
function palindrome()
{
    read.question("Enter the minvalue to find primenumbers: ",function(min){
        read.question("Enter the maxvalue to find primenumbers   : ",function(max){
            /* Declaring the variables for storing the values in array*/ 
            var s1=[]; 
            var a2=[];
            /*Calling the primenumber function from utility*/
             s1=utility.primenumber(min,max);
            /* Initializing the loop to repeat upto given length*/
            for(var i=0;i<=s1.length;i++)
            { 
                /* Initializing the loop to compare with the next value*/
                for(var j=i+1;j<=s1.length;j++)
                {
                    /* creating string variables to store each value of i */ 
                    var str1=""+s1[i];
                    var str2=""+s1[j];
                    /* comparing the string lengths*/
                    if(str1.length!=str2.length)
                    {
                       break;
                    }
                    /* spliltting the string values and sorting the given strings and join the strings*/
                    var string1=str1.split('').sort().join('');
                    /*console.log(str1);*/
                    var string2=str2.split('').sort().join('');
                    /*console.log(str2);*/
                    /*if both strings are equal then push the values in a2 array*/ 
                    if(string1==string2)
                    {
                     a2.push(str1);
                     a2.push(str2);
                    }
                }
            }
            console.log("\nthe anagram values are: "+a2);
            var res=[];
            /*converting the string values to integer values in array through parseInt*/
            for(var k=0;k<a2.length;k++)
            {
              res[k]=parseInt(a2[k]);
              res.push(res[k]);
            }
            /* Intializing the loop to compare evaery anagram value is palindrome or not*/
            for(var i=0;i<res.length-1;i++)
            {
                var sum=0,r;
                var temp=res[i];
                var show=res[i];
                /* loop condition runs when each anagram value is grater than zero*/
                while(res[i]>0)
                {
                    r=res[i]%10;/*dividing the anagram number and storing the remainder value*/
                    sum=(sum*10)+r;/*adding the remaider to sum by multiplying sum to 10*/
                    res[i]=parseInt(res[i]/10);/*dividing the anagram number */
                }
                /* if the anagram value is equal to sum the given number is palindrome*/
                if(temp===sum)
                {
                    console.log("the palindromes are :" +show);
                }

            }
        

        })
    })
}
palindrome();