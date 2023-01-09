var arr = [4,6,10,30,3,98,95];
var big = arr[0];


for (var i=1; i < arr.length;i++){ 
 if(arr[i] > big )
 big = arr[i];
}
console.log(big);

