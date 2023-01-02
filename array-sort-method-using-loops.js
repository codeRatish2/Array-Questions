var  = [1,6,7,2,8,3,4,5,0,9];

for (var i = 0;numbers[i]!= undefined; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);