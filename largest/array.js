var vehicle=[];//decleration

var vehicle =["car","bus", "bus", "bike","plane",2323232,4242424];//initialization

console.log(vehicle[0]);

//element of the array

console.log(vehicle[6]);

//to find the length of array

console.log(vehicle.length);

// fetch every element of the arrray

console.log(vehicle);

//fetch one by one elements of the array thazhek thazhek

for(let i of vehicle)
{
    console.log(i);
}

//to insert a new element

console.log(vehicle.push("auto"));
console.log(vehicle);


vehicle[vehicle.length]="10000000";
console.log(vehicle);

//in-keyword - to get  new index of elements

for(let index in vehicle)
{
    console.log(index);
}
