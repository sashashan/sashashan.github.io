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
	    	duration: 240
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

		$('hr.bottom').fadeIn(1000);
		menu_is_up = true;
	}

	change_background_projects(id_clicked);

	// hide all 3
	$('#'+id_clicked).hide();
	$('#'+id1).hide();
	$('#'+id2).hide();

	$('#'+id_clicked).fadeIn(2000);
}

function change_background_projects(id) {
	var size, id1, id2;
	// reset the color of the other 3 icons and set the size of the background
	if (id == "projects") { 
		size = "400%";
		id1 = "aboutme";
		id2 = "art"; 
	}
	else if (id == "aboutme") { 
		size = "110%";
		id1 = "projects"; 
		id2 = "art";
	}
	else { 
		size = "100%";
		id1 = "projects";
		id2 = "aboutme"; 
	}
	$('#'+id1+'_icon.icon').animate({
		opacity: "1"
	}, {
	    	duration: 10
	});

	$('.'+id1+'_circle').css({'background-image': 'none'});

	$('#'+id2+'_icon.icon').animate({
		opacity: "1"
	}, {
	    	duration: 10
	});

	$('.'+id2+'_circle').css({'background-image': 'none'});

	$('#'+id+'_icon.icon').animate({
		opacity: "0"
	}, {
	    	duration: 10
	});

	$('.'+id+'_circle').css({'background-image': 'url("imgs/main_'+id+'.jpg")', 'background-size': size});



}



