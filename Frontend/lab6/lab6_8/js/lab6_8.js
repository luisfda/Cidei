$(document).ready(function(){
	$('.error').hide();
	$('.result').hide();

	$('.submit').bind('click', function(event){
		var count = $('select option:selected').val();

		if(count == 0){
			$('p.result').hide();
			$('.error').show();
			$('p.error').text('Seleecione un alimento');
		}
		else{
			var selecOptions="";
			$('select option:selected').each(function(){
				selecOptions+=$(this).text()+",";
			});
			$('.error').hide();
			$('p.result').show();
			$('p.result').text('Ud. Seleccionó el alimento: ' + selecOptions);
		}
		event.preventDefault();
	});
});