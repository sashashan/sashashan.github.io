var menu_is_up = false;

function clean() {
	$('#projects').hide();
	$('#aboutme').hide();
	$('#art').hide();
}
$(document).ready(clean);
function show(id_clicked, id1, id2) {
	// clean();
	if (menu_is_up == false) {
		$('hr.top').hide();
		$('hr.bottom').hide();
		$('.'+id_clicked+'_circle').animate({
			marginTop: "1%",
			marginRight: "18px", 
			height: "70px",
			width: "70px",
			borderRadius: "35px"	
		}, {
	    	duration: 250
		});
		$('#'+id_clicked+'_icon').removeClass("fa-3x").addClass("fa-2x");
		$('.'+id1+'_circle').animate({
			marginTop: "1%",
			marginRight: "18px",
			height: "70px",
			width: "70px",
			borderRadius: "35px"
		}, {
	    	duration: 130
		});
		$('#'+id1+'_icon').removeClass("fa-3x").addClass("fa-2x");
		$('.'+id2+'_circle').animate({
			marginTop: "1%",
			marginRight: "18px",
			height: "70px",
			width: "70px",
			borderRadius: "35px"
		}, {
	    	duration: 130
		});
		$('#'+id2+'_icon').removeClass("fa-3x").addClass("fa-2x");

		menu_is_up = true;

		$('#'+id_clicked+'_icon.icon').animate({
			opacity: "0"
		});
		$('#'+id_clicked+'_icon.icon').css('background-image', 'url("imgs/main_projects.png")');

	} else {

	}
}

function change_background_projects() {

}
function change_background_aboutme() {
	
}
function change_background_art() {
	
}