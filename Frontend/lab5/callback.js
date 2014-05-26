/*Callback en js*/
/*Un callback es una función que por parámetro ser le envía otra función
*y la función que lo recibe espera que se ejecute ésta función
*/
function algo(miCallback){
	micallback();
}

algo(function())
{
	console.log("Esto es un callback");	
});

function otroCallback(miCallback){
	miCallback("Un argumento");
}

otroCallback(function(unValor)
{
	console.log("algo se imprime y es: "+unValor );
});