class Bank{
    createAcc(accno,name,balance,phoneno)
    {
    this.accno = accno;
    this.name = name;
    this.balance = balance;
    this.phoneno = phoneno;
    console.log("account created");
    }
    deposit(amount)
    {
        this.balance=this.balanace+amount
        console.log(`${amount}credited to ur account succesfully`);
    }
    
    withdraw(amount)
    {
        if(amount>this.balance)
        {
            console.log("transaction failed (error insufficient balance)");
        }

        else
        {
            this.balance = this.balance-amount
           console.log(`${amount} debited to ur account succesfully`);
        }


}

    balancecheck()
    {
        console.log(`your account balance is ${this.balance}`);

    }
}

b1=new Bank();
b1.createAcc(1000,'vimal',30000,9876543210);
b1.balancecheck();//30000
b1.deposit(1000);//31000
b1.balancecheck();//31000
b1.withdraw(1000);//30000
b1.balancecheck();
b1.withdraw(31000);