//print all vowels in the string

str="hai  hallo";
vowels=['a','e','i','o','u','A','E','I','O','U'];

Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char));