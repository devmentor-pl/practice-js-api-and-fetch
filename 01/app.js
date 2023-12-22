// document.addEventListener('DOMContentLoaded', init)

// function init() {
// 	const divList = document.querySelectorAll('div')

// 	setBorderColorAsync(divList[0], 'red')
// 		.then(() => setBorderColorAsync(divList[1], 'blue'))
// 		.then(() => setBorderColorAsync(divList[2], 'green'))
// 		.then(() => console.log('finish'))
// 		.catch(error => {
// 			console.log(error)
// 		})
// }

// function setBorderColorAsync(element, color) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve((element.style.border = `3px solid ${color}`))
// 			reject('Błąd')
// 		}, Math.random() * 3000)
// 	})
// }

document.addEventListener('DOMContentLoaded', init)

function init() {
	const divList = document.querySelectorAll('div')
	setBorderColor(divList)
}

function setBorderColorAsync(element, color) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve((element.style.border = `3px solid ${color}`))
			reject('Błąd')
		}, Math.random() * 3000)
	})
}

async function setBorderColor(divList) {
	await setBorderColorAsync(divList[0], 'red')
	await setBorderColorAsync(divList[1], 'blue')
	await setBorderColorAsync(divList[2], 'green')
	console.log('finish')
}
