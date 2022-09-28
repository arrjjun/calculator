arr1=[5,7,8,3];
arr2=[2,7,8,1];


p1=0,p2=0;
flag=0;
count=1;
while(p1<arr1.length && p2<arr2.length)
{
    if(arr1[p1]<arr2[p2])
        {
            p1++;
        }
        else if(arr1[p1]==arr2[p2])
        {
            flag=1;
            count++;
            console.log(`common element: ${arr1[p1]}`);
            p1++;
            p2++;
        }
        else if(arr1[p1]>arr2[p2])
        {
            p2++;
        }
}
if(flag==0)
{
    console.log("not found");
}
console.log("total iteration",count);