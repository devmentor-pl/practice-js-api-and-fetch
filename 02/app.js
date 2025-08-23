document.addEventListener('DOMContentLoaded', init);

function init() {
	const divList = document.querySelectorAll('div');

	setBorderColorAsync(divList[0], 'red')
		.then(() => setBorderColorAsync(divList[1], 'blue'))
		.then(() => setBorderColorAsync(divList[2], 'green'))
		.catch((err) => console.error(err))
		.finally(() => console.log('finish'));
}

function setBorderColorAsync(element, color) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isHTML(element)) {
				changeBorder(element, color);
				resolve('done');
			} else {
				reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
			}
		}, setTime);
	});
}

const isHTML = (el) => el && el instanceof HTMLElement;
const setTime = Math.random() * 3000;
const changeBorder = (element, color) =>
	(element.style.border = `3px solid ${color}`);
