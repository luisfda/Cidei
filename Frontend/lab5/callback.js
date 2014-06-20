/*Callback en js*/
/*Un callback es una función que por parámetro ser le envía otra función
*y la función que lo recibe espera que se ejecute ésta función
*/
function algo(miCallback){
	miCallback();
}

algo(function()
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

/*multiples callbacks llamado en determinados casos*/

function algoOcurre(callback1, callback2, callback3){
	//Pasa la primera vez
	callback1("Primer paso");

	//Siguiente callback
	callback2("Segundo paso");

	//Y por último
	callback3("Ultimo y tercer paso");
}

//LLamado y uso de múltiples callback para "algoOcurre"
algoOcurre(
	function(paso1){
		console.log(paso1);
	},
	function(paso2){
		console.log(paso2);
	},
	function(paso3){
		console.log(paso3);
	}
);