function cb() {
	var x = document.getElementById("x1");
	navigator.clipboard.writeText(x.value);
	alert("Copied the text: " + x.value);
	window.location.replace("https://steamcommunity.com/id/htgshawn/");
}