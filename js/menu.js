$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

	$('#btn1').click(function(){

	
			$('nav').animate({
				left: '-100%'
			});
			contador = 0;
	

	});
	$('#btn2').click(function(){

	
		$('nav').animate({
			left: '-100%'
		});
		contador = 0;


});
$('#btn3').click(function(){

	
	$('nav').animate({
		left: '-100%'
	});
	contador = 0;


});
$('#btn4').click(function(){

	
	$('nav').animate({
		left: '-100%'
	});
	contador = 0;


});
$('#btn5').click(function(){

	
	$('nav').animate({
		left: '-100%'
	});
	contador = 0;


});

};

