var arr=[10,14,1,2,3,15];
//binary search function returns the element index if found otherwise -1
const binarysearch=(arr,start,end,num)=>
{
    const mid=Math.floor((end+start)/2);//mid
    if(start <= end)
    {
        if(arr[mid] === num)
        {
            return mid;
        }
        if(num < arr[mid])
        {
            return binarysearch(arr,start,mid-1, num);

        }
        if(num > arr[mid])
        {
            return binarysearch(arr,mid+1,end,num);

        }
    }
    return -1;
};
console.log(binarysearch(arr,0,arr.length-1,4));
console.log(binarysearch(arr,0,arr.length-1,15));