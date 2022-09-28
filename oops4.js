db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false

function validateAccount(accno)
{
    return accno in db? true:false
}
console.log(validateAccount(1000));//1000 is a key in a db

//2 create a function for authenticate user using account number and password 
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied

function authenticated(accno,pswd)
{
    //1.validate acno //acno=1000
    if(validateAccount(accno))
    {
        actualpswd=db[pswd].password;//1000

        if (pswd == actualpswd)
        {
            //1000=1000
            console.log("access granted");
        }else {
            console.log("permission denied");
        }
    }else{
        console.log("permission denied");
    }
}
authenticated(1004,1000);





    

