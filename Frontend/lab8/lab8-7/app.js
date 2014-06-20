var express = require('express'),
	app= express(),
	http=require('http'),
	server = http.createServer(app),
	io=require('socket.io').listen(server);

server.listen(8585);

app.use(express.static(__dirname));

//Ruta(s) que se manejaran
app.get('/', function(req,res){
	res.sendfile(__dirname + '/index.html');
});

//variable sernames para los usuario conectados
var usernames={};

io.sockets.on('connection',function(socket){
	//cuando el cliente browser, emite el evento sendechat, este debe escuchar y ejecutar 
	socket.on('sendchat',function(data){
		//LE enviamos emit al cliente que ejecute el updatechat con dos parametros socket.username y data
		console.log("updatechat server");
		io.sockets.emit('updatechat', socket.username,data);
		});

		//Cuando el cliente emite un evento adduser, este escucha y ejecuta 
		socket.on('adduser',function(username){
			//Almacenamiento del nombre de usuario en la sesión de toma de info del cliente

			socket.username=username;
			//Adicionamos el usuario socket.username al objeto usernames
			usernames[username]=username;
			//Enviamos al cliente el objeto con la lista de usuarios en el objeto usernames
			socket.broadcast.emit('updatechat','SERVER', username +'Esta conectado');

			//Enviamos la petición al mismo cliente de la petición con la conexión de el mismo
			socket.emit('updatechat', 'SERVER','Usted está conectado');

			//Actualizamos la lista de usuario en el chat, en el cliente
			io.sockets.emit('updateusers',usernames);
		});

		//cuando el usuario se desconecta
		socket.on('disconnect',function(){
			delete usernames[socket.username];
			//Actualizamos la de usuarios cliente
			io.sockets.emit('updateusers',usernames);
			//Envío golbal de la actualización de la lista de clientes conectados
			socket.broadcast.emit('updatechat','SERVER',socket.username+'Está desconectado');
		});
});