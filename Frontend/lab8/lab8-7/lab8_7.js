var socket = io.connect('http://127.0.0.1:8585');

//En conexión con el servidor, pregunta el respectivo nombre de usuario y una devolución anónima de llamado
socket.on('connect',function(){
	//LLamando el evento, funcion adduser y le enviamos un parámetro de ingreso por el prompt
	socket.emit('adduser',prompt('Cual es su nombre de usuario'));
});

//Evento que está escuchando la invocación de updatechat y actualiza el cuerpo del chat
socket.on('updatechat',function(username,data){
	$('#conversation').append('<b>'+username+':</b>' + data +'<br />');
	console.log("updatechat cliente");
});

//Evento que está escuchando la invocacón de uptateusers, este acualiza la lista de usuarios
socket.on('updateusers',function(data){
	$('#users').empty();
	$.each(data,function(key,value){
		$('#users').append('<div>'+key+'</div>');
	});
});

$(document).ready(function(){
	$('#datasend').click(function(){
		var message = $('#data').val();
		//Indicarle al servidor que ejecute el evento sendchat y se le envian dos parámetros
		socket.emit('sendchat',message);
	});

	//cuando el usuario utiliza la tecla enter

	$('#data').keypress(function(event){
		if(event.which===13){
			$(this).blur();
			$('#datasend').focus().click();
		}
	});
});