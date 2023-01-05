const order = [{
        orderId: 23,
        totalAmount: 1224,
        customerName:"shivam",
        customerId:044,
        customerCity: "Alibag",
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
        customerCity: "Alibag",
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

var mostOrderedCity ;
var x = 1;
var maxcount = 0;
 for(var i =1; i < cities.length; i++){
    for(var j=0; j < i; j++){
        if(cities[i] == cities[j])
            maxcount++;
          if(x < maxcount){
            x = maxcount;
              mostOrderedCity = cities[i];  
          }  
    

     
    }
    maxcount = 0;
}
    
  console.log(mostOrderedCity);
     
















