let arr = [1,2,3,4,5,10,11,34,45];
let x =10;
let n = arr.length;

  function search (arr, x, n){
    for(let i =0; i < n;i++ )
     if(arr[i]== x)
      return i;
    return -1;

 }

let result = search(arr,x,n);
  (result == -1)
   
  ? document.write("Element is not present in array")
        : document.write("Element is present at index " + result);