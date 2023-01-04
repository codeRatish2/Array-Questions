const order = [{
        orderId: 23,
        totalAmount: 1224,
        customerName:"shivam",
        customerId:044,
        customerCity: "Nagpur",
    },
    {   orderId: 24,
        totalAmount: 1345,
        customerName:"Ratish",
        customerId:045,
        customerCity: "Alibag",
    },
    {   orderId: 25,
        totalAmount: 1245,
        customerName:"shivam",
        customerId:044,
        customerCity: "Nagpur",
    },
    {   orderId: 26,
        totalAmount: 2122,
        customerName:"pankaj",
        customerId:046,
        customerCity: "Pune",
    },
    {   orderId: 27,
        totalAmount: 2435,
        customerName:"Akshay",
        customerId:047,
        customerCity: "Pune",
    },
    {   orderId: 28,
        totalAmount: 2446,
        customerName:"Akshay",
        customerId:047,
        customerCity: "Pune",
    }

    ];


var cities = [];

for(i=0; order[i]!= undefined;i++){
    // console.log(order[i].customerCity);
    cities.push(order[i].customerCity)
}

  var mostOrderedCity ="";
  for(i=0; cities[i]!= undefined; i++){
     for(j = 1; i !=j; j++)
    if(cities[i] === cities[j]){
        mostOrderedCity.push(cities[i]);
    }
  }  


  





//   for (var i=0; i<arr1.length; i++)
//   {
//           for (var j=i; j<arr1.length; j++)
//           {
//                   if (arr1[i] == arr1[j])
//                    m++;
//                   if (mf<m)
//                   {
//                     mf=m; 
//                     item = arr1[i];
//                   }
//           }



















