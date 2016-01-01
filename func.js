function clean() {
	$('#projects').hide();
	$('#aboutme').hide();
	$('#art').hide();
}
$(document).ready(clean);
function show(id_clicked, id1, id2) {
	clean();
	$('hr.bottom').hide();
	$('#'+id_clicked+'_circle').animate({
		marginTop: "3%",
		height: "90px",
		width: "90px",
		borderRadius: "45px"	
	}, {
    	duration: 250
	});
	$('#'+id1+'_circle').animate({
		marginTop: "3%",
		height: "90px",
		width: "90px",
		borderRadius: "45px"
	}, {
    	duration: 120
	});
	$('#'+id2+'_circle').animate({
		marginTop: "3%",
		height: "90px",
		width: "90px",
		borderRadius: "45px"
	}, {
    	duration: 120
	});
	// $('hr.top').removeClass("top").addClass("slideup-line");
	// $('#'+id+'_circle').css('transition:', 'margin-top', '3s');
	// $('#'+id).show();
}