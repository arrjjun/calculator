weatherdata=[
    {district:'Thrissur',weather:28},
    {district:'Palakkad',weather:36},
    {district:'Kozhikod',weather:28},
    {district:'Thrissur',weather:29},
    {district:'Palakkad',weather:31},
    {district:'Kozhikod',weather:34},

] //array of objects.

//print district with its highest temparature

output={};
for(let data of weatherdata)
{
    let distname = data["district"];//thrissur
    let currenttemp =data["weather"];//28

    if(distname in output)
    {
        let oldtemp = output[distname];
        if(currenttemp>oldtemp){//29>28
            output[distname]=currenttemp;//29
        }
    }
    else{
        output[distname]=currenttemp;
    }
}
console.log(output);

//sort the given output in descending order of temperature
//1 object to array conversation - object.enteries(object-name) -nested array
//2 array sort
console.log(object.entries(output).sort());