//student class reaction

//student rollno,sname,mark,grade

class student{
    //instance initialization - constructor() - default method(no need to create a new function) first execute

    constructor(rollno,name,grade,total){
        this.rollno = rollno;
        this.studentname =  name;
        this.grade = grade;
        this.totalmark = total;
    }
    printDetails(){//user defined function
        consoele.log(this.rollno,this.student,this.grade,this.totalMark);
    
    }
}
s1=new student(1,'amar',8,450);
s1.printDetails();

s2=new student(2,'bimal',8,420);
s2.printDetails();