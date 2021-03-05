if (matchMedia){
	var screen = window.matchMedia("(max-width:575px)");
	screen.addListener(changes);
	changes(screen);
}
function changes(screen) {
	if (screen.matches) {
		document.getElementById("lala").setAttribute('class', 'center row');
	}
	else{
		document.getElementById("lala").removeAttribute('class');
		document.getElementById("lala").setAttribute('class', 'row');
	}
}