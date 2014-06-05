$(document).ready(function(){
	$('.error').hide();

	$('.nombres').blur(function(){
			data = $('.nombres').val();

			var len = data.length;

			if(len<1){			
				if($(this).attr('name')==="nombres")
					$(this).parent().find('.error').show().text("Falta el usuario");
			}
			else{
				$('.error').hide();
				//$('.nombres').next().hide();
			}
			event.preventDefault();
		});

	/*$('.password').blur(function(){
			var data = $('.password').val();
			var len = data.length;
			if(len<1){
				$('.password').next().show();
				//$('.confpass').attr('disabled', true);
			}
			else{
				$('.password').next().hide();
				//$('.confpass').removeAttr('disabled')
			}
		});

		$('.confpass').blur(function(){
			if($('.password').val()!== $('.confpass').val()){
				//$('confpass').next().show();
			}
			else{
				//$('.confpass').next().hide();
			}
		});	*/




	/*$('.submit').bind('click', function(event){
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


	
	});*/

	function valid_email(email){
		var pattern= new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
			return pattern.test(email);
	}
});