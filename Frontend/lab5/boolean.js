/*Variables y elementos del tipo Booleano*/
var verdadero = true;
var falso = false;

/*Elementos de compración*/

/*igual(==)*/
console.log(1==1);
//Correción de tipos
console.log("1"==1);
//Igual estricto(===)
console.log("1"===1);

console.log(""==0);
//Declaración de un objeto
var x = {};
var y = x;

console.log(x==y);
console.log(x === y);

//compracion no estricta de no igual(!=)
console.log("" !=0);
//compraci[on estricta de no igual (!=
console.log(""!==0);

/*Flujos logicos*/
//and
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

//or
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);
