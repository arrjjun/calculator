array1=[5,7,8,3];
array2=[7,8,2,1];

function getcommonitems(array1,array2)
{
    var common = [] //initialize array to contain common items

    for (var i = 0; i < array1.length; i++)
    {
        for(var j = 0; j < array2.length; j++)
        {
            if (array1[i] == array2[j]) //if item is present in both arrays
            {
                common.push(array1[i]); //push to common array
            }
        }
    }

    return common; //return the common items
}

// get common items of array1,array2
var commonitemlist= getcommonitems(array1,array2);

console.log(commonitemlist);