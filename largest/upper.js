//convert and display text in capital letters

str="luminar"; //LUMINAR

//convert to array  - Array.from()


///Array

console.log(Array.from(str));

//returns

/*[
    'l', 'u', 'm'

    'i', 'n', 'a'

    'r', 

]*/ 

console.log(Array.from(str).map(char=>char.touppercase()));


/*[
     'L', 'U', 'N'

     'I', 'N', 'A'

     'R'
]*/

console.log(Array.from(str).map(char=>char.touppercase()).forEach(char=>console.log(char)));










