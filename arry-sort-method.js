var number = [2,3,4,1]
  
for(var i =1; i < number.length; i++)
  for(var j = 0; j< i; j++)
   if(number[i] < number[j]){
    var x = number[i];
    number[i] = number[j];
    number[j]= x;
   } 
   console.log(number);