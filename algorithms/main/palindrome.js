
var readline=require('readline');
var utility=require('../utility/utility.js')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function palindrome()
{
    read.question("Enter the minvalue to find primenumbers: ",function(min){
        read.question("Enter the maxvalue to find primenumbers   : ",function(max){
            var s1=[]; 
            var a2=[];
             s1=utility.primenumber(min,max);
            for(var i=0;i<=s1.length;i++)
            {
                for(var j=i+1;j<=s1.length;j++)
                {
                    var str1=""+s1[i];
                    var str2=""+s1[j];
                    if(str1.length!=str2.length)
                    {
                       break;
                    }
                    var string1=str1.split('').sort().join('');
                    /*console.log(str1);*/
                    var string2=str2.split('').sort().join('');
                    /*console.log(str2);*/
                    if(string1==string2)
                    {
                     a2.push(str1);
                     a2.push(str2);
                    }
                }
            }
            console.log("\nthe anagram values are: "+a2);
            var res=[];
            for(var k=0;k<a2.length;k++)
            {
              res[k]=parseInt(a2[k]);
              res.push(res[k]);
            }
            for(var i=0;i<res.length-1;i++)
            {
                var sum=0,r;
                var temp=res[i];
                var show=res[i];
                while(res[i]>0)
                {
                    r=res[i]%10;
                    sum=(sum*10)+r;
                    res[i]=parseInt(res[i]/10);
                }
                if(temp===sum)
                {
                    console.log("\nthe palindromes are :" +show);
                }

            }
        

        })
    })
}
palindrome();