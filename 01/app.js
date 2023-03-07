document.addEventListener("DOMContentLoaded", init);

function init() {
	const divList = document.querySelectorAll("div");

	setBorderColorAsync(divList[0], "red", changeToBlue);

	function changeToBlue() {
		setBorderColorAsync(divList[1], "blue", changeToGreen);
	}

	function changeToGreen() {
		setBorderColorAsync(divList[2], "green", showConsoleLog);
	}

	function showConsoleLog() {
		console.log("finish");
	}
}

function setBorderColorAsync(element, color, callback) {
	setTimeout(() => {
		element.style.border = `3px solid ${color}`;
		callback();
	}, Math.random() * 3000);
}
