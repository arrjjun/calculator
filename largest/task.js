//[rollno, name, class, markofmaths, markofphy,markofchem]
arr=[
    [1,'manu',12,45,65,70],
    [2,'amal',10,67,86,75],
    [3,'sara',12,86,87,90],
    [4,'vimal',10,86,56,90],
    [5,'shaju',12,,56,61,70],
    [6,'kavita',10,55,56,60],
]

//1 sort the student in descending order of markofmaths
//2 find all students who are in class 10th
//3 print the names of all students
//4 print the details of kavita
//5 print 1st student who has least mark in physics 
//6 Find which student have highest mark in Chemistry
//7 Is amal is present or not?
//8 print all marks in physics
//9 Display only 10th std students' names one by one 
//10 Is there any student who is studying in 11th std?

//1.sort the students in descending order of markofmaths

console.log(arr.sort((d1,d2)=>d2[3]-d1[3]));

//2.find all students who are in class 10th

console.log(arr.filter(emp=>emp[2]==10));

//3.print the names of all students

 console.log(arr.map(emp=>emp[1]));

 //4.

console.log(arr.filter(emp=>emp[1]=='kavita')) ;

//5.


