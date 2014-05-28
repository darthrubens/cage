$(document).ready( function(){
	var n = Math.floor((Math.random()*4)+1);
	var cage = "url('img/cage-" + n + ".jpg')";
	$("#cage").css('background-image', cage);
})
