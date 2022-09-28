// function linearsearch(array,tofind)
// {
//     for(i=0; i< array.length; i++)
//     {
//         if (array[i] ===tofind)
//         return i;

//     }
//     return -1;

// }
// console.log(linearsearch(1,2,3,))


// function binarysearch(arr,target)
// {
//     let left =0;
//     let right =arr.length -1;
//     while (left <= right)
//     {
//         const mid=Math.floor (right + left) / 2;
//         if(arr[mid] === target)
//         {
//             return mid;

//         }
//         if(arr[mid] < target)
//         {
//             left = mid + 1;

//         } else {
//             right = mid - 1;
//         }

//     }
//     return -1;
// }
// console.log(binarysearch([4,5,6],9));


//var rainbow =  ["red", "orange","yellow", "green", "blue", "indigo", "violet"];

function linearsearch(array,n)
{
    for(i=0; i< array.length; i++)
        {
             if (array[i] ===n)
             return i;
    
         }
         return -1;
    
     }
     console.log(linearsearch(array,n),orange)
