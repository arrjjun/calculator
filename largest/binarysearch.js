//1.sorting

var arr=[10,14,1,2,3,15];


console.log("before sorting",arr);
arr.sort((n1,n2)=>n1-n2);//ascending order
console.log("after sorting",arr);

arr.sort((n1,n2)=>n2-n1);//descending order
console.log("after sorting",arr);
