function on(overlay_id, underlay_id, underlay_classes, button) {
	document.getElementById(overlay_id).style.opacity = "1";
	document.getElementById(button).style.opacity = "1";
	var x = document.getElementById(underlay_id).getElementsByClassName(underlay_classes);
  for (var i = 0; i < x.length; i++) {
    x[i].style.filter = "blur(7px)";
    x[i].style.opacity = "0.35";
	}
}

function off(overlay_id, underlay_id, underlay_classes, button) {
	document.getElementById(overlay_id).style.opacity = "0";
	document.getElementById(button).style.opacity = "0.6";
	var x = document.getElementById(underlay_id).getElementsByClassName(underlay_classes);
  for (var i = 0; i < x.length; i++) {
    x[i].style.filter = "blur(0px)";
    x[i].style.opacity = "1";
	}
}
