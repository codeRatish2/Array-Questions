var cars = [
    {
        make: "Honda",
        model: "civic",
        year: 2014,
        color:"blue"
    },
    {
        make:"Toyota",
        model: "camry",
        year:2000,
        color:"red"
    },
    {
        make:"Ford",
        model: "mustang",
        year: 2005,
        color: "black"
    }
]

for(i=0;i < cars.length;i++){
    if(cars[i].year < 2010){

     console.log(cars[i].make + "," + cars[i].model);
    } 
}