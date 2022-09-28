class Bank{//here db is the
    db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}


 validateAccount(accno)
{
    return accno in this.db? true:false
}

//function authenticated

authenticated(accno,pswd)
{
     //validate accno  //accno = 1000
    if(this.validateAccount(accno))
    {
        //validate password //db[1000]={"accno"}
        if (pswd == this.db [accno].password)
        {
            
            console.log("login succesfull");
        }else {
            console.log("incorrect password");
        }
    }else{
        console.log("invalid acc no");
    }
}
}
b1=new Bank();
b1.validateAccount(1000);
b1.authenticated(1001,1001);

//3getBlance()function
getBalance(acno){
    return this.validateAcno(acno)?this.db[acno].balance:"ivalid Account number"
}

//4.fund transfer function
fundTransfer(fromacc,toacc,amount)
{
    if(this.validateAccount(fromacc))
}
