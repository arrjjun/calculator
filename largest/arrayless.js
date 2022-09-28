a=[
    [1,2],
    [10,22],
    [14,21],
    [3,6],
    [5,9],
    [19,28,]
]





for(let subArray of a)
{
    console.log(subArray);
    for(let num of subArray)
    {
        if(num<10)
        {
            console.log(num);
        }
    }
}