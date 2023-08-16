document.addEventListener('DOMContentLoaded', init);

function init() {
	const divList = document.querySelectorAll('div');

	// setBorderColorAsync(divList[0], 'red', function () {
	// 	setBorderColorAsync(divList[1], 'blue', function () {
	// 		setBorderColorAsync(divList[2], 'green', function () {
	// 			console.log('finish');
	// 		});
	// 	});
	// });

	setBorderColorAsync(divList[0], 'red', fristCallback);

	function fristCallback() {
		setBorderColorAsync(divList[1], 'blue', secondCallback);
	}
	function secondCallback() {
		setBorderColorAsync(divList[2], 'green', thirdCallback);
	}
	function thirdCallback() {
	    // moim zdaniem ten callback jest potrzebny, zeby wywolac slowo finish rowno z wstawieniem green borderu
	    console.log(`finish`);
	}

	//@@@@@@@@@@@ promises @@@@@@@@@@@@

	// function setBorderColorAsyncPromise(element, color) {
	//     // dziala ale jest w setBorderColor nie ma potrzeby 3 argumentu
	// 	return new Promise((resolve, reject) => {
	// 		setBorderColorAsync(element, color, () => {
	// 			resolve();
	// 		});
	// 	});
	// }
	// setBorderColorAsyncPromise(divList[0], 'red')
	// 	.then(() => setBorderColorAsync(divList[1], 'blue'))
	// 	.then(() => setBorderColorAsync(divList[2], 'green'));

	// //@@@@@ async/await @@@@@@
	// async function setBorderColorAsyncAwait() {
	// 	await setBorderColorAsync(divList[0], 'red');
	// 	await setBorderColorAsync(divList[1], 'blue');
	// 	await setBorderColorAsync(divList[2], 'green');
	// }
	// function setBorderColorAsync(element, color) {
	// 	return new Promise(resolve => {
	// 		setTimeout(() => {
	// 			element.style.border = `3px solid ${color}`;
	// 			resolve();
	// 		}, Math.random() * 3000);
	// 	});
	// }
	// setBorderColorAsyncAwait();
}

function setBorderColorAsync(element, color, callback) {
	setTimeout(() => {
		element.style.border = `3px solid ${color}`;
		callback();
	}, Math.random() * 3000);
}
