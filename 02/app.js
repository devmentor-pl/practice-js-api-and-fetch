document.addEventListener("DOMContentLoaded", init);

function init() {
	const divList = document.querySelectorAll("div");
	const [one, two, three] = divList;

	setBorderColorAsync(one, "red")
		.then(() => setBorderColorAsync(two, "blue"))
		.then(() => setBorderColorAsync(three, "green"))
		.then(() => {
			console.log("finish");
		})
		.catch(error => console.error(error))
		.finally(() => {
			console.log("done");
		});
}

function setBorderColorAsync(element, color) {
	const promise = new Promise((resolve, reject) => {
		if (element && element instanceof HTMLElement) {
			// if (callback && typeof callback === "function") {

			setTimeout(() => {
				element.style.border = `3px solid ${color}`;
				resolve("done");
			}, Math.random() * 3000);
			// } else {
			// 	reject(alert("Parametr ~callback~ musi być funkcją"));
			// }
		} else {
			reject(alert("Parametr ~element~ musi być prawidłowym elementem DOM"));
		}
	});
	return promise;
}
