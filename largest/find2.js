covid_data=[
    [1,'Eranakulam',34000,2000,23000,20000,2000],
    [2,'Edukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Kottayam',27000,1500,27000,14000,1000],
    [7,'Kollam',14000,2500,25000,18000,2700]
]


//1.find which district has the highest +ve case?

console.log(covid_data.reduce((d1,d2)=>d1[2]>=d2[2]?d1:d2).find(item=>item[1]));

//2.find which district having highest 1st dose vaccine?

console.log(covid_data.reduce((d1,d2)=>d1[5]>=d2[5]?d1:d2).find(item=>item[1]));

//3.find whic district having lowest death rate?

console.log(covid_data.reduce((d1,d2)=>d1[3]<=d2[3]?d1:d2).find(item=>item[1]));

//4.sort the data with +ve case in descending order

console.log(covid_data.sort((d1,d2)=>d2[2]-d1[2]).map(d=>d[1]));

//map use chythappo name mathram kity

//5.Is any district having more than 27000 +ve case - some

console.log(`covid data ${covid_data.some(d=>d[2]>27000)}` );

//6.sort data with 1st dose vaccine

console.log('sort data with first dose vaccine');
console.log(console.log(covid_data.sort((d1,d2)=>d2[5]-d1[5]).map(d=>d[1])))

//7.print total number of curred cases

console.log(`total number of curred cases:${covid_data.map(d=>d[4]).reduce((c1,c2)=>c1+c2)}`);