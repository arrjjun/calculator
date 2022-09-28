var age=23;
if(age < 18)
{
    console.log("you are minor.");
    console.log("not eligble to work");
}
else
{
    if(age >=18 && age <=60)
    {
    console.log("you are eligble to work.");
    console.log("please fill in your details and apply");
    }
    else{
        console.log("you are too old  to work as per government rules");
        console.log("please collect your pension");
    }
}