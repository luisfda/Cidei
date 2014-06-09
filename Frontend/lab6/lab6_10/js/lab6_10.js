$(document).ready(function(){

	$('.button').bind('click', function(event){
		var data = $('#nombres').val();
		var len = data.length;

		if(len<1&&data===""){
			$('#nombres').next().show();
			$('.error-usr').next().show();
			$('.error-usr').text('Indique su(s) Nombre(s) y Apellido(s)');
		}
		else if(len>30){
			$('#nombres').next().show();
			$('.error-usr').next().show();
			$('.error-usr').text('Máximo 30 caracteres');
		}
		else{
			$('#nombres').next().hide();
			$('.error-usr').next().hide();
			localStorage.setItem('nombres', data);
		}

		var data = $('.emailadd').val();

		if(valid_email(data)){
			$('.emailadd').next().hide();
			$('.email-error').hide();
			localStorage.setItem('email',data);
		}
		else{
			$('.emailadd').next().show();
			$('.email-error').next().show();
			$('.email-error').text('Correo no válido');
		}

		count = $('select option:selected').val();

		if(count=="0"){
			$('.error-ciu').show();
			$('.error-ciu').text('Seleccione su ciudad');

		}
		else{
			$('.error-ciu').hide();
			localStorage.setItem('ciudad',count);
		}

		var data = $('.password').val();
		var len = data.length;

		if(len<1&&len!==""){
			$('.password').next().show();
			$('.error-pw').next().show();
			$('.error-pw').text('Ingrese una contrasenia');
		}
		else{
			$('.password').next().hide();
			$('.error-pw').next().hide();
			localStorage.setItem('password', $.md5(data));
		}

		var confData = $('.confpass').val();
		var len = confData.length;

		if(len<1&&len!==""){
			$('.confpass').next().show();
			$('.error-confpw').next().show();
			$('.error-confpw').text('Confirme la contrasenia');
		}
		else{
			$('.confpass').next().hide();
			$('.error-confpw').next().hide();

			if($('.password').val() !== $('.confpass').val()){
				$('.confpass').next().show();
				$('.error-confpw').next().show();
				$('.error-confpw').text('La contrasenia no es igual');
			}
			else{
				$('.confpass').next().hide();
				$('.error-confpw').hide();
			}
		}

		var count = 0, meals={};
		$('#checkboxes').find(':checked').each(function(){
			if($(this).is(':checked')){
				count += parseInt($(this).val());
				meals[$(this).attr('name')]=parseInt($(this).val());
			}
		});

		if(count===0){
			$('.food-error').show();
			$('.food-error').text('Debe seleccionar un alimento');
		}
		else{
			$('.food-error').hide();
			$('.food-total').show();
			$('.food-total').text('El total de la compra: $ '+ count +'M/Cte');

			localStorage.setItem('total', count);
			localStorage.setItem('meals', JSON.stringify(meals));
		}

		count=0;

		$('#radios').find(':radio').each(function(){
			if($(this).is(':checked')){
				count++;
				localStorage.setItem('paymode',$(this).val());
			}
		});

		if(count == 0){
			$('.pay-error').show();
			$('.pay-error').text('Debe seleccionar un modo de pago');

		}
		else{
			$('.pay-error').hide();
		}

		$('.total').show();
		$('.total').text('Detalle del Pedido:  '+
			' Nombre: ' + localStorage.getItem('nombres') +
			' Email: ' + localStorage.getItem('email') +
			' Ciudad: '+ localStorage.getItem('ciudad')+			
			' Modo de pago es: ' + localStorage.getItem('paymode')+
			' Productos: ' + localStorage.getItem('meals')
			);
			


//'<li id="listMeals"> Los alimentos que solicita son: ' + '<ul></ul></li>' +
		event.preventDefault();
	});

	function valid_email(email){
		var pattern= new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
			return pattern.test(email);
	}
	
});