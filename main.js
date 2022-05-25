function cb() {
	var x = document.getElementById("x1");
	x.select();
	navigator.clipboard.writeText(x.value);
	alert("Copied the text: " + x.value);
}