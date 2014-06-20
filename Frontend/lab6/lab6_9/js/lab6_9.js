$(document).ready(function(){
	$('.error').hide();
	$('.submit').bind('click', function(event){
		var data = $('.infobox').val();

		if(valid_email(data)){
			$('.error').hide();
			localStorage.setItem('email', data);
			$('.result').show();
			$('.result').text("Usted ingresó el correo electrónico: "+ localStorage.getItem('email'));
		}
		else{
			$('.error').show();
			$('.error').html('<h1>Ingrese una direción de correo válida</h>');
		}


	event.preventDefault();
	});

	function valid_email(email){
		var pattern= new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
			return pattern.test(email);
	}
});