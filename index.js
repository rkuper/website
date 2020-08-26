function on(overlay_id, underlay_id, underlay_classes) {
	document.getElementById(overlay_id).style.opacity = "0.95";
	var x = document.getElementById(underlay_id).getElementsByClassName(underlay_classes);
  for (var i = 0; i < x.length; i++)
    x[i].style.filter = "blur(15px)";
}

function off(overlay_id, underlay_id, underlay_classes) {
	document.getElementById(overlay_id).style.opacity = "0";
	var x = document.getElementById(underlay_id).getElementsByClassName(underlay_classes);
  for (var i = 0; i < x.length; i++)
    x[i].style.filter = "blur(0px)";
}
