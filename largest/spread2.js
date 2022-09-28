//create a function for  find sum of numbers
function sum(...arg)
{
    return arg.reduce((n1,n2)=>n1+n2)
} 

console.log(sum(10,20,30,40,50));




//create a function for finding largest number

function sum(...arg)
{
    return arg.reduce((n1,n2)=>n1>n2?n1:n2)
} 

console.log(sum(10,20,30,40,50));


