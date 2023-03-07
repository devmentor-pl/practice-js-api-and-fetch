document.addEventListener("DOMContentLoaded", init);

function init() {
	const divList = document.querySelectorAll("div");

	const [one, two, three] = divList;

	setBorderColorAsync(one, "red", changeToBlue);

	function changeToBlue() {
		setBorderColorAsync(two, "blue", changeToGreen);
	}

	function changeToGreen() {
		setBorderColorAsync(three, "green", showConsoleLog);
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
