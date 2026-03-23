document.addEventListener('DOMContentLoaded', init);

function init() {
	const divList = document.querySelectorAll('div');
	const colors = ['red', 'blue', 'green'];

	// setBorderColorAsync(divList[0], 'red', function () {
	// 	setBorderColorAsync(divList[1], 'blue', function () {
	// 		setBorderColorAsync(divList[2], 'green', function () {
	// 			console.log('finish');
	// 		});
	// 	});
	// });

	// setBorderColorAsync(divList[0], 'red', firstCallback);
	// function firstCallback() {
	// 	setBorderColorAsync(divList[1], 'blue', secondCallback);
	// }
	// function secondCallback() {
	// 	setBorderColorAsync(divList[2], 'green', thirdCallback);
	// }
	// function thirdCallback() {
	// 	console.log('finish');
	// }

	renderBorder(divList, colors, 0);
}

function renderBorder(divList, colors, index) {
	if (index >= divList.length) {
		console.log('finish');
		return;
	}

	setBorderColorAsync(divList[index], colors[index], () => {
		renderBorder(divList, colors, index + 1);
	});
}

function setBorderColorAsync(element, color, callback) {
	setTimeout(() => {
		element.style.border = `3px solid ${color}`;
		callback();
	}, Math.random() * 3000);
}
