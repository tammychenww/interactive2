$(document).ready(function(){

	var on = false;

	// turn on the lights
	function turnItOn () {
		$('body').css('background', '#ED1A4C');
		on = !on;
	}

	// turn off the lights
	function turnItOff () {
		$('body').css('background','black');
		on = !on;
	}

	$('.light').click(function(){
		if(!on){
			turnItOn();
		} else {
			turnItOff();
		}    
	});

});

