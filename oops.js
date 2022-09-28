 class Employee{
 //instance initialization
 setEmployee=(id,name,designation,salery)
 {//function
 this.id=id, //reference - initialize the object with
 this.name=name, //this.name(address)
 this.designation=designation,
 this.salery=salery
 console.log("employee details created ");
 }
 
printEmployee(){
    console.log(this.id,this.name,designation,this.salery)
 }
 }
 //to be execute a class them we need to crete an object
 //object / instnce
 //object creation
 //object_name = new class_name();
emp=new Employee();
 // //object1
emp.setEmployee(1000,'manoj','Developer',30000);
// //object2
// emp1=new Employee();
//emp1.setEmployee(1001,'santhosh','Tester',20000);
 emp.printEmployee();
//emp1.printEmployee();