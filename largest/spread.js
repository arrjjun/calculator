//add two members
function add(a,b)
{
    console.log("sum of two numbers");
    return a + b;
}
add(20,10);

//spread operator ... can be use in order to achieve function overloading

function add(...arg)
{
    console.log("argument method ");
    console.log(arg);
}

add(20,10);
add(20,10,30);
add(20,10,30,40);