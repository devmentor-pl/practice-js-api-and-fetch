document.addEventListener("DOMContentLoaded", init);

function init() {
	const divList = document.querySelectorAll("div");

	const [one, two, three] = divList;

	setBorderColorAsync(one, "red", change2Blue);

	function change2Blue() {
		setBorderColorAsync(two, "blue", change2Green);
	}

	function change2Green() {
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