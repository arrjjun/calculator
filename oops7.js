//prototype inheritance

boleno={//object
    manufacturer:'suzuki',
    varients:['manuel', 'automatic'],
    price:1000000
}
glanza={
    manufacturer:'toyota'
}

glanza.__proto__=boleno
console.log(glanza.varients);
