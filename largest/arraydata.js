//[id,name,designation,location,salary,experience]
Employee=[
    [1000,'Neel','Developer','Kochi',25000,3],
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1000,'Nihaan','Developer','Kochi',25000,3],

]

//1 Print all employee name
//2 Print total number of employee
//3 Print developer employee details
//4 Print developer  details whose salary > 30000
//5 Print details of employee Laisha
//6 Sort employee based on descending order of salary
//7 sort employee based on ascending order of experience


// console.log("Employee name");
// for(let emp of Employee)//print all employee name
// {
//     if(emp[2]== 'developer')//print developer employee details
//     console.log(emp);
// // console.log(emp[1]);
//  }

// console.log("total number of Employee");//print total number of employee
// console.log(Employee.length);

// console.log("Employee name:");
// for(let emp of Employee)
// {
//     if(emp[4]> 30000)
//     console.log(emp);

// }

// for(let emp of Employee)
// {
//     if(emp[1]== "Laisha")
//     console.log(emp);

// }

// console.log("salery in descending order");
// Employee.sort((emp1,emp2)=>emp2[4]-emp1[4]);
// console.log(Employee);


// console.log("salery in ascending order");
// Employee.sort((emp1,emp2)=>emp1[5]-emp2[5]);
// console.log(Employee);


//print details of employee laisha

console.log(Employee.find(emp=>emp[1]=='Laisha'));



