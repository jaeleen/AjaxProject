document.getElementById("username").addEventListener("blur", validateNotEmpty);
document.getElementById("password").addEventListener("blur", validateNotEmpty);
document.getElementById("submit").addEventListener("mouseover", addToolTip);
document.getElementById("submit").addEventListener("mouseout", removeToolTip);


function validateNotEmpty(event) {
	var name = event.currentTarget;
	var error = document.getElementById(name.id + "_error");
	if (name.value.length == 0){
		error.className = "show_error";	
	} else {
		error.className = "hide_error";
	}
}

function addToolTip(event) {
	var tooltip = document.getElementById("tooltip");
	var name = document.getElementById("username");
	var password = document.getElementById("password");
	
	if (name.value.length == 0 || password.value.length == 0) {
		
		tooltip.innerHTML = "You must enter your ";
		if (name.value.length == 0) {
			tooltip.innerHTML += "username";
		}
		if (name.value.length == 0 && password.value.length == 0) {
			tooltip.innerHTML += " and ";
		}
		if (password.value.length == 0) {
			tooltip.innerHTML += "password";
		}
		tooltip.innerHTML += ".";
		
		tooltip.className = "show_tooltip";
		tooltip.style.top = event.clientY + 10 + "px";
		tooltip.style.left = event.clientX + "px";
	} 
}

function removeToolTip(event) {
	var tooltip = document.getElementById("tooltip");
	tooltip.className = "hide_tooltip";
}

