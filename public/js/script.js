$(function(){

	function removerValores(){
		$('#sexo').css({
				'background':'',
				'color':'', 
				'border': ''
			});
			$('#calc-imc').css({
				'background':'',
				'color':'',
				'border': ''
			});
			$('#resultado').css({
				'background':'', 
				'color':'#000'
			});
			$('body').css('background','');
			$('.nav').css('background-color','');
	}

	$('#calc-imc').click( function(){

		$('#resultado').html('');

		var altura   = $('#altura').val(),
		    peso     = $('#peso').val(),
		    sexo     = $('#sexo').val(),
		    nome 	 = $('#nome').val(),
		    situacao = '';

		    altura = altura.replace(',','.');
			peso   = peso.replace(',','.');

		var imc	     = peso / (altura*altura);
		
		$('.modal-content').find('input, select').each(function () {

			if ( $(this).val() == '' ) {

				$(this).css('border-color','red');
				$('#resultado').html('Preencha os campos em vermelho').css({
					'color':'red',  
					'font-size': '20px',
					'line-height':'70px'
				});

			}else{

				$(this).css('border-color','');
			}

		});

		if((sexo == 1 && imc < 19.1) || (sexo == 2 && imc < 20.7) ){
			situacao = 'Você esta abaixo do peso, isso é muito grave!';
		}else 
		if((sexo == 1 && (imc >= 19.1 && imc < 25.8)) || (sexo == 2 && (imc >= 20.7 && imc < 26.4))){
			situacao = 'Parabens, voce esta no seu peso ideal';
		}else
		if((sexo == 1 && (imc >= 25.8 && imc < 27.3)) || (sexo == 2 && (imc >= 26.4 && imc < 27.8))){
			situacao = 'Você esta acima do peso';
		}else
		if((sexo == 1 && (imc >= 27.3 && imc <= 32.3)) || (sexo == 2 && (imc >= 27.8 && imc <= 31.1))){
			situacao = 'você esta muito acima do peso';
		}else{
			situacao = 'obeso';
		}

		if($('#resultado').html() == ''){

			$('#resultado').html('IMC: '+ imc +' kg/m²<br> status: ' + situacao).css({
				'color':'#fff',  
				'font-size': '15px',
				'line-height':'35px'
			});
		}

	});

	$('#calc').click(function(){

		$('.modal-imc').slideDown();

		return false;
	});

	$('.modal-close').click(function(){

		$('.modal-imc').hide();

		$('.modal-content').find('input, select').each(function () {

			$(this).val('').css('background','');

			removerValores();
		});

		return false;
	});

	$('#sexo').change(function(){
		
		var sexo = $('#sexo').val();

		if(sexo == 1){

			$('#sexo').css({
				'background':'#9b59b6',
				'color':'#fff', 
				'border': '3px solid #8e44ad'
			});
			$('#calc-imc').css({
				'background':'#9b59b6',
				'color':'#fff',
				'border': '3px solid #8e44ad'
			});
			$('#resultado').css('background','#9b59b6');
			$('body').css('background','#D8BFD8');
			$('.nav').css('background-color','#9b59b6');

		}else 
		if(sexo == 2){

			$('#sexo').css({
				'background':'#3498db',
				'color':'#fff', 
				'border': '3px solid #2980b9'
			});
			$('#calc-imc').css({
				'background':'#3498db',
				'color':'#fff',
				'border': '3px solid #2980b9'
			});
			$('#resultado').css('background','#3498db');
			$('body').css('background','#B0E0E6');
			$('.nav').css('background-color','#3498db');

		}else{
			removerValores();
		}
	});
});