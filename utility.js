module.exports={
    /* 
     *  @description : Comparing the strings to check for anagram
     *  @function : function anagram takes two strings and compares the string according 
     *              to length ,sorting that strings to compare whether it is same or not  
     */
    anagram : function(string1,string2)
    {
        /*
         * @description : conparing the strings using string length property
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
          /*console.log(str2);*/
          /*
           * @description : comparing the strings after sorting to find anagram
           */ 
          if(str1==str2)
          {
              console.log( string1+" and "+string2+" are anagram to each other");
          }
          return (string1,string2)
    },

    
    primenumber : function(min,max)
    {
        var flag,count=0;
        var primenumbers= [];
        for(var i=min+2;i<=max;i++)
        {
            flag=1;
            for(var j=2;j<=i/2;j++)
            {
                if(i%j==0)
                {
                    flag=0;
                    break;
                }
            }    
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

    binary : function(size)
    {
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
        var a=0;
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the numbers");
        }
        arr.sort();
        console.log(arr);
        var first=0,last=size-1;
        var value=prompt("enter the element to search: ");
        while(first<=last)
        {
            var mid=Math.floor((first+last)/2);
            if(value==arr[mid])
            {
               a=1;
                break;
            }
            else{
                if(value>arr[mid])
                {
                    first=mid+1;
                }
                else{
                    last=mid-1;
                }
            }
        }
        if(a==1)
        {
            console.log("element is found at index "+mid);
        }
        else
        {
            console.log("element not found");
        }
    },

             
    bubble : function(arr)
    {
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
        console.log("The sorted array is"+arr);
    },

    insertion : function(arr)
    {
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
    },

    calender : function(y,m,d)
    {
        var m0,y0,d0,x;
        y0=y-Math.floor(14-m)/12;
        console.log(y0);
        x=y0+Math.floor(y0/4)-Math.floor(y0/100)+Math.floor(y0/400);
        console.log(x);
        m0=m+12*(Math.floor(14-m)/12)-2;
        console.log(m0);
        d0=(d+ x +Math.floor (31 * m0) / 12) % 7;
        
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

  convert_to_f : function(celsius,value)
  {
      if(celsius=="C")
      c=(value*Math.floor(9/5))+32;
      console.log("The given "+value+" degree centigrade is converted into "+c+" degree fahrenheit");
  }, 

  convert_to_c : function(Fahrenheit,value)
  {
      if(Fahrenheit=="F")
      f=(value-32)*(5/9);
      console.log("The given "+value+" degree fahrenheit is converted into "+f+" degree centigrade");
  },

  payment : function(Principal,Year,Rate)
  {
    var n=12*Year;
    var r=Rate/(12*100);
    pay = (Principal*r)/1-Math.pow(1+r,-n);
    console.log("Monthly payment is :"+pay);
  },

  sqrt : function(c)
  {
         if(c<0)
         {
             console.log("The given value is non negative");
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
      var fs=require('fs');
      var text=fs.readFileSync('message.txt','utf8');
      var arr=text.split(" ");
      arr=arr.sort();
      console.log(arr);
      var a=0;
      var first=0;
      var last=arr.length-1;
      while(first<=last)
      {

         var  mid=(Math.floor(first+last)/2);
         console.log(mid);
          if(searchword===arr[mid])
          {
              console.log("the search element is found at "+mid)
              break;
          }       
            else{
                if(searchword > arr[mid])
                {
                 first=mid+1;
                 console.log(first);
                }
                else 
                {
                last=mid-1;
                console.log(last);
                }
            }
        
        }
          if(a==1)
          {
              console.log("The search element is found at index "+mid);
          }
          else{
              console.log("the search element is not found");
          }
      
  },

  vendmachine : function(amount)
  {
       var thousand=0, fivehundred=0, hundred=0,fifty=0,twenty=0,ten=0,five=0,two=0,one=0;
       var count=0;

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

    binary : function(decimal)
    {
        var binary=[];
        var reverse=[];
        var index=0;
        while(decimal>0)
        {
            reverse[index]=decimal%2;
            decimal=Math.floor(decimal/2);
            index++;
        }
        for(var j=0;j<reverse.length;j++)
        {
            binary[j]=reverse[reverse.length-1-j];
            
        }
        return binary;
    }











} 
