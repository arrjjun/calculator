// to hold an expense and
// find total expenses
// find max expenses
// find min expenses


var expense=[12000,20000,34000,10000,28000,15000];

// sum=0;

// console.log(expense.length);

// for(let i of expense);
// {
//     i=expense;
//     sum =i
//     console.log(i);
// }

//sum

var total=0;
for(let amount of expense)
{
    total+=amount;

}
console.log("total expense:" + total);


var maxexp=0;
for(let amount of expense) 
{
    if(maxexp<amount)
    {
    maxexp=amount;
    }


}
console.log("maximum expense:" +maxexp);

//minimum

var minexp=12000;
for(let amount of expense)
{
    if(minexp>amount)
    {
        minexp=amount;

    }
}
 
console.log("minimum expense:" +minexp);


