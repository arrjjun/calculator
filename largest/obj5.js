products=[
    {pid:100,pname:'apple',band:'5G',price:120000,display:'led'},
   {pid:101,pname:'samsung',band:'5G',price:45000,display:'led'},
    {pid:102,pname:'blackberry',band:'4G',price:50000,display:'led'},
    {pid:103,pname:'nokia',band:'3G',price:1200,display:'lcd'},
    {pid:104,pname:'motorola',band:'4G',price:10000,display:'lcd'},
]

//1. print product name only
//2. print all mobile details whose display is lcd
//3. print 5G mobile phone name
//4. filter mobile based on price
//5. print costly mobile
//6. print low cost mobile

//1
//products.forEach(data=>console.log(data.pname));

//2
//products.filter(data=>data.display=='lcd').forEach(p=>console.log(p.pname));

//3
//products.filter(data=>data.band=='5G').forEach(p=>console.log(p.pname));

//4
//products.sort((d1,d2)=>d2.price-d1.price).forEach(p=>console.log(p.pname));

//5
//console.log(products.reduce((d1,d2)=>d1.price>d2.price?d1:d2));

//6
console.log(products.reduce((d1,d2)=>d1.price<d2.price?d1:d2).pname);

