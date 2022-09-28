var arr=[10,24,5,43,50,17];
//check whether the element(2) is present or not


var element=2;
flag=0;
for(let n of arr)
{
    if(n==element) 
    {
        flag=1;
        break;

    }
}
console.log(flag==1?"number is found:" : "number is not found");
