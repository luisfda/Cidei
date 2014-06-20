/*Objetos y funciones*/

var myObject = new Object();
var myObject={};
//los arrays tambien son objetos
var lotter=[3,5,23,1,2];

profile = {
	firstName : "Alejandro",
	lastName : "Romero",
	phone : 3984932980928
}
console.log(profile);

console.log(profile.firstName);
console.log(profile["lastName"]);

//Iterando sobre un objeto{}
for(key in profile){
	console.log(profile[key]);
}

/*Functions*/
function test(){
	console.log("Hola");
}
test();

chao = function(){
	console.log("Chao");
}

chao();