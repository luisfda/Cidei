var logic = require('./logic');

exports.get=function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/html'
	});

	res.end(
		logic.page('División',logic.navbar(),
			[	
				(!isNaN(req.a)&&!isNaN(req.b)?('<p>{a} Division/{b}={sq}</p>')
					.replace('{a}', req.a)
					.replace('{b}', req.b)
					.replace('{sq}',(req.a/req.b)):''),
				'<p>Ingrese un número para calcular</p>',
				'<form name="squared" action="/squared" method="get">',
				'Dividendo: <input type="text" name="a">',
				'Divisor: <input type="text" name="b">',
				'<button type="submit">fjhasdlk</button>',
				"</form>"
			].join('\n'))
		);
}