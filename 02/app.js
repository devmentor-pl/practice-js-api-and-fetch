document.addEventListener('DOMContentLoaded', init);

function init() {
	const divList = document.querySelectorAll('div');

	setBorderColorAsyncPromise(divList[0], 'red', function () {
		setBorderColorAsyncPromise(divList[1], 'blue', function () {
			setBorderColorAsyncPromise(divList[2], 'green', function () {
				console.log('finish');
			});
		});
	});
}

// function setBorderColorAsync(element, color, callback) {
// 	if (element && element instanceof HTMLElement) {
// 		// sprawdzam czy parametr jest elementem DOM, więcej:
// 		// https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object

// 		if (callback && typeof callback === 'function') {
// 			setTimeout(() => {
// 				element.style.border = `3px solid ${color}`;
// 				callback();
// 			}, Math.random() * 3000);
// 		} else {
// 			alert('Parametr ~callback~ mus być funkcją');
// 		}
// 	} else {
// 		alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
// 	}
// }
function setBorderColorAsyncPromise(element, color, callback) {
	if (element && element instanceof HTMLElement) {
		const promise = new Promise(function (reject) {
			if (callback && typeof callback === 'function') {
				setTimeout(() => {
					element.style.border = `3px solid ${color}`;
					callback();
				}, Math.random() * 3000);
			} else {
				reject('Paremetr ~callback~ mus być funkcją');
			}
		});
		return promise;
	} else {
		return Promise.reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
	}
}
