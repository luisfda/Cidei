function Suma(a,b)
{
	this.a = a;
	this.b = b;
}

Suma.prototype={
	constructor: Suma,
	getResult: function(){
		console.log(this.a+this.b);
	},
	getA: function(){
		console.log(this.a);
	},
	getB: function(){
		console.log(this.b);
	}
}

function Arreglo()
{
	this.numeros = [];
}

Arreglo.prototype={
	constructor: Arreglo,
	getSuma: function()
	{
		var i = 0;
		var sum = 0;
		for(i;i<this.numeros.length;i++){
			//console.log(sum);
			sum += this.numeros[i];			
		}
		console.log(sum);
	},
	getMultiplicar: function()
	{
		var i = 0;
		var sum = 1;
		for(i;i<this.numeros.length;i++){
			//console.log(sum);
			sum *= this.numeros[i];			
		}
		console.log(sum);
	}
}

function Abcedario(){
	this.noVocales = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];	
}

Abcedario.prototype={
	constructor: Abcedario,
	getConsonantes: function()
	{
		var i=0;
		for(i; i<this.noVocales.length;i++)
		{
			if(this.noVocales[i]==="A"||this.noVocales[i]==="E"||this.noVocales[i]==="I"||this.noVocales[i]==="O"||this.noVocales[i]==="U")
			{
				console.log("No es consonante");
			}
			else
			{
				console.log(this.noVocales[i]);
			}
		}
	}
}

function FisBus(){
	
}

FisBus.prototype = {
	constructor : FisBus,
	getMultiplos : function(){
		var i=1;
		for (i; i <= 100; i++) {
			if((i%3 === 0) && (i%5 ===0)){
				console.log("FisBus");
			}
			else 
				if(i%3 === 0){
				console.log("fis");
			}
			else 
				if (i%5 === 0) {
				console.log("bus");
			}
			else {
				console.log(i);
			}
		}
	}
}


