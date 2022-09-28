//[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]
// covid_data=[
//     [1,'Eranakulam',34000,2000.23000,20000,2000],
//     [2,'Edukki',14000,3000,25000,30000,1000],
//     [3,'Thrissur',24000,4000,33000,24000,2500],
//     [4,'Pathanamthitta',20000,2000,45000,22000,1500],
//     [5,'Kozhikode',44000,5000,12000,21000,500],
//     [6,'Kottayam',27000,1500,27000,14000,1000],
//     [7,'Kollam',14000,2500,25000,18000,2700]
// ]

//1. Find which district having highest +ve case?
//2. Find which district having highest 1st dose vaccine?
//3. Find which district having lowest death rate?
//4. Sort the data with +ve case in desending order
//5. Find district having more than 15000 +ve cases
//6. sort data with 1st dose vaccine
//7. print total number of +ve cases
//8. print total number of curred cases
//9. print total curred cases in Edukki


//print thrissur deatails - find()

// console.log(covid_data.find(covi=>covi[1]=='Thrissur'));


//foreach() - helps to fetch each item


products=[
    [1,'Hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,0],
    [6,'unibic',60,20],
    [7,'good day',70,20],
]
//1.display product name one by one

products.forEach(products=>console.log(products[1]));

//2.print price of each items

products.forEach(products=>console.log(products[2]));

//3.print stock of each stocks

products.forEach(products=>console.log(products[3]));

