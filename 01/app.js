document.addEventListener('DOMContentLoaded', init)

function init() {
	const divList = document.querySelectorAll('div')

	// setBorderColorAsync(divList[0], 'red', function() {
	//     setBorderColorAsync(divList[1], 'blue', function() {
	//         setBorderColorAsync(divList[2], 'green', function() {
	//             console.log('finish');
	//         });
	//     });
	// });

	setBorderColorAsync(divList[0], 'red', firstCallback)

	function firstCallback() {
		setBorderColorAsync(divList[1], 'blue', secondCallback)
	}

	function secondCallback() {
		setBorderColorAsync(divList[2], 'lime', thirdCallback)
	}

	function thirdCallback() {
		console.log('started all async fn')
	}
}

function setBorderColorAsync(element, color, callback) {
	setTimeout(() => {
		element.style.border = `3px solid ${color}`
		callback()
	}, Math.random() * 3000)
}