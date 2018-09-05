var prompt=require('prompt-sync')();
function setNumber(){
    var num = parseInt(prompt("enter the strings"));
    if(num > 0){
        return num;
    }else{
        console.log("R-enter the number again")
        return setNumber();
    }
}

module.exports={
    /* 
     *  @description : Comparing the strings to check for anagram
     *  @function : function anagram takes two strings and compares the string according 
     *              to length ,sorting that strings to compare whether it is same or not  
     */
    anagram : function(string1,string2)
    {
        /*
         * @description : comparing the strings using string length property
         */
        if(string1.length!=string2.length)
        {
            console.log("The given String lengths are not equal \n Hence the strings are not anagram");
        }
          /*
           * @description : converting the string into lowercase ,splitting the every value of string 
           *                and performing sorting through sort method at last joins every value
           */
          var str1=string1.toLowerCase('').split('').sort().join('');
          /*console.log(str1);*/
          var str2=string2.toLowerCase('').split('').sort().join('');
       // @description : comparing the strings after sorting to find anagram 
          if(str1==str2)
          {
              console.log( string1+" and "+string2+" are anagram to each other");
          }
        //   return (string1,string2)
    },

    /*
     * @description : printing the primenumbers with in the given range
     * @function: primenumber function takes minimum and maximum numbers as input and gives
     *            the primenumbers within that range
     */
    primenumber : function(min,max)
    {
        /* declaring the variables flag to check the given number is prime or not ,
         * count to count the numbers in the given range and primenumber array to store primenumbers
         */
        var flag,count=0;
        var primenumbers= [];
        // Initializing the loop to repeat upto given range
        for(var i=min;i<=max;i++)
        {
            flag=1;
            // Intializing the loop to check the primenumber condition
            for(var j=2;j<=i/2;j++)
            {
                if(i%j==0)
                {
                    flag=0;
                    break;
                }
            }   
            /* If flag value is changed to one then push the number in primenumber array 
               and increase the count*/  
            if(flag==1)
            {
                primenumbers.push(i);
                count=count+1;
            }
        }
        console.log("No of primenumbers in "+min+" to "+max+"are : "+count)
        console.log( "The primenumbers in the range "+min+" to "+max+" are: "+primenumbers);
        return primenumbers;
        
    },
/* getcurrenttime function gives present system time and return to called function in main*/
    getcurrenttime : function()
   {
    var date=new Date();
    var n=date.getTime();
    return n;
   },
   /*elapsed time gives difference between start time and stop time*/ 
   elapsedtime : function(start,stop)
   {
     elapsed =(stop-start);
     return elapsed;
   },
/*binary function takes the array values and sorted it and search for the given element*/
    binary : function(size)
    {
        /*returns an instance of prompt to read input from users*/
        var arr=new Array(size);
        var a=0;
        /*Initilizing the loop to store the array values*/
        for(var i=0;i<size;i++)
        {
            arr[i]= setNumber();
            // /*var  temp=prompt("enter the numbers: ");*/
            // arr[i]=prompt("enter the numbers: ");
        }
        /* variables that defines special characters using regex values*/
        /*var a=/[a-zA-Z]/g;
        var b=/[0-9]/g;
        var c=/[!@#$%^&*()<>+-/"'?]/g;
        var count=0;
        /*intializing the loop to take only number values*/ 
        /*for(var i=0;i<arr.length;i++)
        {
            if(arr[i].search(a)== -1 && arr[i].search(c)== -1)
            {
                count=count+1;
            }
        }*/
        /* if count and array values are equal then the array is sorted*/
       /* if(count==arr.length)
        {
           arr.sort(function(a,b){
               return a-b;
           });
            console.log(arr);*/
            /* defining first and lastindex values of array*/
            var first=0,last=size-1;
            /*by using prompt we are taking search elements*/
            var value=prompt("enter the element to search: ");
            /* while loop compares the first and last indexes */
             while(first<=last)
            {
               mid=Math.floor((first+last)/2);
               /*if the search element is euals to mid values of array it will takes indexvalue*/
              if(value==arr[mid])
               {
                    a=1;
                    break;
               }
               else
               {
                   /* search element is greater than the mid value it will adds mid+1 to first*/
                    if(value>arr[mid])
                    {
                       first=mid+1;
                    }
                    else{
                        last=mid-1;
                    }
                }
            }
        //}
        /* if the user enter differnt numbers then it will print else statement*/
        /*else{
            console.log(" please enter number");
        }*/
        if(a==1)
        {
            console.log("element is found at index "+mid);
        }
        else
        {
            console.log("element not found");
        }
    },

    /*binaryword function takes the array values and sorted it and search for the given word*/
    binaryword : function(size)
    {
        /*returns an instance of prompt to read input from users*/
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
        var a=0;
        /*Initilizing the loop to store the array values*/
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the strings: ");
        }
        /* variables that defines special characters using regex values*/
        var char=/[a-zA-Z]/g;
        var num=/[0-9]/g;
        var symbol=/[!@#$%^&*()<>+-/"'?]/g;
        var count=0;
        /*intializing the loop to take only string values*/
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].search(num)== -1 && arr[i].search(symbol)== -1)
            {
                count=count+1;
            
            }
        }
         /* if count and array values are equal then the array is sorted*/
        if(count===arr.length)
        {
           arr.sort(function(char,num){
               return char-num;
           });
            console.log(arr);
            /* defining first and lastindex values of array*/
            var first=0,last=size-1;
            var value=prompt("enter the element to search: ");
             while(first<=last)
            {
               mid=Math.floor((first+last)/2);
                 /*if the search element is euals to mid values of array it will takes indexvalue*/
              if(value==arr[mid])
               {
                    console.log(" The search element is found at index : "+mid);
                    process.exit();
               }
               /* search element is greater than the mid value it will adds mid+1 to first*/
               else if(value>arr[mid])
                    {
                       first=mid+1;
                    }
               /* search element is lesser than the mid value it will subtracts mid-1 from last*/     
               else if(value<arr[mid])
                    {
                        last=mid-1;
                    }
                else
                {
                    console.log("The search element is not found");
                    process.exit();
                }
            }
        } 
        /* if the user enter differnt input then it will print else statement*/
        else
        {
            console.log("Enter string values");
        }
    },
     /*bubble function takes the array values and sorted it by comparing with index values*/         
    bubble : function(size)
    {  
         /*returns an instance of prompt to read input from users*/
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
         /*Initilizing the loop to store the array values*/
        for(var i=0;i<size;i++)
        {
        }
         /* variables that defines special characters using regex values*/
        var a=/[a-zA-Z]/g;
        var b=/[0-9]/g;
        var c=/[!@#$%^&*()<>+-/"'?]/g;
        var count=0;
         /*intializing the loop to take only number values*/
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].search(a)== -1 && arr[i].search(c)== -1)
            {
                count=count+1;
            }
        }
         if(count==arr.length)
         {
             console.log(arr);
             /* compare each and every value and if each index value is greater than the 
                given value it will swap*/
            for(var j=0;j<arr.length-1;j++)
            {
              for(var k=0;k<arr.length-1-j;k++)
                 {
                    if(arr[k]>arr[k+1])
                     {
                        var  temp=arr[k];
                         arr[k]=arr[k+1];
                         arr[k+1]=temp;
                     }
                  }
            } 
             console.log("The sorted array is "+[arr]);
         }
         else
        {
             console.log("please enter numbers");
         }
    },
 /*bubbleword function takes the array values and sorted the words by comparing with index values*/
    bubbleword : function(size)
    {   
         /*returns an instance of prompt to read input from users*/
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
           /*Initilizing the loop to store the array values*/
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the strings");
        }
         /* variables that defines special characters using regex values*/
        var char=/[a-zA-Z]/g;
        var num=/[0-9]/g;
        var symbol=/[!@#$%^&*()<>+-/"'?]/g;
        var count=0;
           /*intializing the loop to take only string values*/
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].search(num)== -1 && arr[i].search(symbol)== -1)
            {
                count=count+1;
            }
        }
        if(count==arr.length)
        {
            console.log(arr);
             /* compare each and every value and if each index value is greater than the 
                given value it will swap*/
           for(var j=0;j<arr.length-1;j++)
           {
               for(var k=0;k<arr.length-1-j;k++)
               {
                    if(arr[k]>arr[k+1])
                   {
                       var  temp=arr[k];
                         arr[k]=arr[k+1];
                         arr[k+1]=temp;
                    }
                }
           }
         console.log("The sorted array is"+[arr]);
        }
        else
        {
         console.log("please enter string values");
        }
    },
 /*insertionword function takes the array values and sorted it by comparing with key elements*/ 
    insertionword : function(size)
    {
        /*returns an instance of prompt to read input from users*/
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
        /*Initilizing the loop to store the array values*/
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the strings");
        }
        var char=/[a-zA-Z]/g;
        var num=/[0-9]/g;
        var symbol=/[!@#$%^&*()<>+-/"'?]/g;
        var count=0;
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].search(num)== -1 && arr[i].search(symbol)== -1)
            {
                count=count+1;
            }
        }
        if(count==arr.length)
        {
            console.log(arr);
            /* Insertion sort is done by taking the starting index as key element and compare 
               with remaining values if the value is greater than key element ,key value is moved
               before the keyelement*/
            for(var j=1;j<arr.length;j++)
            {
              var key=arr[j];
              var k=j-1;
              while(k>-1 && arr[k]>key)
              {
                  arr[k+1]=arr[k];
                  k--;
            }
              arr[k+1]=key;
           }  
        
           console.log("The sorted array is " +arr)
        }
        else
        {
           console.log("please enter string values");
        }
    },
/*insertionword function takes the array values and sorted it by comparing with key elements*/ 
    insertion : function(size)
    {

        /*returns an instance of prompt to read input from users*/
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
         /*Initilizing the loop to store the array values*/
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the numbers: ");
        }
        var char=/[a-zA-Z]/g;
        var num=/[0-9]/g;
        var symbol=/[!@#$%^&*()<>+-/"'?]/g;
        var count=0;
     
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].search(char)== -1 && arr[i].search(symbol)== -1)
            {
                count=count+1;
            }
        }
        if(count==arr.length)
       {
              /* Insertion sort is done by taking the starting index as key element and compare 
               with remaining values if the value is greater than key element ,key value is moved
               before the keyelement*/
            for(var j=1;j<arr.length;j++)
            {
              var key=arr[j];
              var k=j-1;
              while(k>-1 && arr[k]>key)
              {
                  arr[k+1]=arr[k];
                  k--;
            }
              arr[k+1]=key;
           }  
        
           console.log("The sorted array is " +arr)
        }
        else
        {
           console.log("please enter numerical values");
        }
    },
/* taking low and high values and finding the number*/
    numgame : function(low,high)
    {
        var prompt=require('prompt-sync')();
        var m=parseInt(low)+parseInt(high);
        mid=Math.floor(m/2);1
        console.log("if the given num is less than "+mid+" press 1");
        console.log("if the given number is greater than "+mid+" press 2");
        console.log("if number is equal press zero: ")
        var temp= prompt("enter the number: ");
        /* pressing temp value equal to 0 then it is your number*/
        if(temp == 0)
        {
            console.log("your number is: "+mid);
        }
        /*if temp value is 1 then number is less than mid and repeat the numgame function through recursion*/
        else if(temp == 1)
        {
            this.numgame(low,mid);
        }
        /*if temp value is 2 then number is greater than mid*/
        else if(temp == 2)
        {
            this.numgame(mid,high);
        }
        else{
            console.log("Invalid option");
        }
    },
/*taking input as year,month and date displaying the day as output*/
     calender : function(y,m,d)
    {
        var m0,y0,d0,x;
        y0=y-Math.floor(14-m)/12;
        x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        m0=m+12*(Math.floor(14-m)/12)-2;
        d0=(d+ x +Math.floor( (31 * m0) / 12)) % 7;

        /* by taking d0 values switch cases will takes values*/
        switch(parseInt(d0))
        {
            case 0: console.log("sunday");
                    break;  
            case 1: console.log("MONDAY");
                    break;
            case 2: console.log("Tuesday");
                    break;  
            case 3: console.log("wednesday");
                    break;  
            case 4: console.log("Thursday");
                    break;  
            case 5: console.log("friday");
                    break;  
            case 6: console.log("saturday");
                    break;                
            default: console.log("Inavalid input");
                     break;
         }  

    },
/* convert_to_f function takes celsius value and convert it into fahrenheit*/
  convert_to_f : function(celsius,value)
  {
      if(celsius=="C")
      c=(value*Math.floor(9/5))+32;
      console.log("The given "+value+" degree centigrade is converted into "+c+" degree fahrenheit");
  }, 
/* convert_to_c function takes Fahrenheit value value and convert it into celsius*/
  convert_to_c : function(Fahrenheit,value)
  {
      if(Fahrenheit=="F")
      f=(value-32)*(5/9);
      console.log("The given "+value+" degree fahrenheit is converted into "+f+" degree centigrade");
  },
/*interest for monthly payment is printed by taking amount,rate of interest and no of years*/ 
  payment : function(Principal,Year,Rate)
  {
    var n=12*Year;
    var r=Rate/(12*100);
    pay = (Principal*r)/1-Math.pow(1+r,-n);
    console.log("Monthly payment is :"+pay);
  },
/* the squareroot values will be printed for positive integers*/
  sqrt : function(c)
  {
         if(c<0)
         {
             console.log("The given value is negative integer");
         }
         var t=c;
         var epsilon=1e-15;
         while(Math.abs(t-c/t) > epsilon*t)
          {
            t=((c/t)+t)/2;
          }
          console.log("square root is: "+t );
  },

  word : function(searchword)
  {
      /* used to read the file from fs module*/
      var fs=require('fs');
      /* used to encode the message and read the file*/
      var text=fs.readFileSync('message.txt','utf8');
      /* splitting the text by spaces and stored in array*/
      var arr=text.split(" ");
      /* sort the given array*/
      arr=arr.sort();
      console.log(arr);
      var first=0;
      var last=arr.length-1;
      while(first<=last)
      {

         var  mid=Math.floor((first+last)/2);
          if(searchword==arr[mid])
          {
              console.log(" The word is given in the file at index: "+mid);
              process.exit();
          }       
          else if(searchword > arr[mid])
          {
                 first=mid+1;
                 console.log(first);
          }
          else if(searchword < arr[mid])
          {
                last=mid-1;
                console.log(last);
          }
          else
          {
              console.log("The given word is not in the file");
              process.exit();
          }
        
      }
                     
    },
/* to count the minimum number of notes through vending machine*/
  vendmachine : function(amount)
  {
       var thousand=0, fivehundred=0, hundred=0,fifty=0,twenty=0,ten=0,five=0,two=0,one=0;
       var count=0;
/* if the amount is greates than or equal to money then count value increased and amount 
   amount value is reduced to money*/
       while(amount>=1000)
       {
         thousand=thousand+1;
         amount=amount-1000;
         count=count+1;
       }
       while(amount>=500)
       {
          fivehundred=fivehundred+1;
          amount=amount-500;
          count=count+1;
        }
      while(amount>=100)
      {
         hundred=hundred+1;
         amount=amount-100;
         count=count+1;
      }
      while(amount>=50)
      {
         fifty=fifty+1;
         amount=amount-50;
         count=count+1;
      }
      while(amount>=20)
      {
         twenty=twenty+1;
         amount=amount-20;
         count=count+1;
      }
      while(amount>=10)
      {
         ten=ten+1;
         amount=amount-10;
         count=count+1;
      }
      while(amount>=5)
      {
         five=five+1;
         amount=amount-5;
         count=count+1;
      }  
      while(amount>=2)
      {
         two=two+1;
         amount=amount-2;
         count=count+1;
      }         
      while(amount>=1)
      {
        one=one+1;
        amount=amount-1;
        count=count+1;
      }

      console.log("the minimum no of notes are: "+count);
    },
/* Taking decimal value as input and gives binary value*/
    getbinary : function(decimal)
    {
        /*initalizing the empty arrays to store the values an initialized index to zero*/
        var binaryvalue=[];
        var reverse=[];
        var index=0;
        /* Entering in the loop when the decimal value is greaterthan zero*/
        while(decimal>0)
        {
            /*Taking the remainder values and storing in array in evert iteration*/
            reverse[index]=decimal%2;
            /*Decimal value is divided by 2 and storing in decimal*/
            decimal=Math.floor(decimal/2);
            index++;
        }
        /* storing the array values of decimal in reverse order*/
        for(var j=0;j<reverse.length;j++)
        {
            binaryvalue[j]=reverse[reverse.length-1-j];
        }
        return binaryvalue;
    },

  mergesort : function(arr)
  {
      /* arrays are defined to store the splitted value of single array*/ 
     var arr1=[];
     var arr2=[];
     /* Taking the mid value of an array to split into half*/
     var mid=Math.floor(arr.length/2);
     /* if the array is having one value then it will return array*/
     if(arr.length==1)
     {
         return arr;
     }
     /* Storing the first half values in the arr1*/
     for(var i=0;i<mid;i++)
     {
         arr1.push(arr[i]);
     }
     /* storing the reamaining half values in arr2*/
     for(var j=mid;j<arr.length;j++)
     {
         arr2.push(arr[j]);
     }
     /* splitting the above process through recursion*/ 
     return this.merge(this.mergesort(arr1),this.mergesort(arr2));
    },

     merge : function(left,right) 
     {
   
       var sorted = [];
       var leftindex=0;
       var rightindex=0;
       while(sorted.length<(left.length + right.length))
        {
            if(leftindex== left.length) 
            {
                for(var i=rightindex;i<right.length;i++)
                {
                       sorted.push(right[i]);
                       rightindex++;
                }
            }
            else if(rightindex== right.length) 
            {
                for(var i=leftindex;i<left.length;i++)
                {
                   sorted.push(left[i]);
                   leftindex++;
                }
            }
            else if(left[leftindex]<right[rightindex]) 
            {
                 sorted.push(left[leftindex]);
                   leftindex++;
            }
            else 
            {
                 sorted.push(right[rightindex]);
                   rightindex++;    
            }
        }
        return sorted;
     },
   
     toBinary : function(dec)
     {
         /*decimal value is converted into binary and it is stored in an array*/
         var a=0;
         var res=" ";
         while(dec>0){
             a=Math.floor(dec%2);
             res=res+ "" +a;
             dec=Math.floor(dec/2);
         }
         var resarray=(res.split('')).reverse().join('');
         console.log("Binary value of the given decimal is: "+resarray);
         return resarray;
     },
     
     nibble : function(bin)
     {
         /*the binary values is splitted into two strings and second string value is added to first
           and new binary number is formed*/ 
         var str = ""+bin;
         var mid=0,str1="",res=[];
         var flag=false;
         while(flag==false)
         if(str.length==9)
         {
             mid=Math.floor(str.length/2);
             /*console.log(mid +" mid value");*/
             var str1=str.slice(0,mid);
              var str2=str.slice(mid,str.length);
              var res=(str2.trim())+str1;
              flag=true;
              console.log("new binary number is "+res);
              return res;
         }
         else{
             while(str.length<9)
             {
                 str='0'+str;
             }
            }
       },
       Binary : function (bin)
     {
         /* the above resultant binary value is reversed and again it is converted into decimal value*/
         var str=""+bin;
         var arr=(str.split('')).reverse();
         var dec=0;
         for(var i=0;i<arr.length;i++)
         {
             dec=dec+parseInt(arr[i]*(Math.pow(2,i)));
         }
        /* console.log("decimal value of the given number is"+dec);*/
         return dec;
     },

       checkpow: function (n)
       {
           /* checking wheather the formed number is the power of 2 or not*/
           var pow=0;
           while(n>1){
               if(n%2==0)
               {
                   pow++;
               }
               else{
                   return -1;
               }
               n=n/2;
           }
           return pow;
       }
    








} 
