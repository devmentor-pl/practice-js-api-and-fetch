document.addEventListener('DOMContentLoaded', init);

function init() {
	const divList = document.querySelectorAll('div');

	/* setBorderColorAsync(divList[0], 'red', function() {
        setBorderColorAsync(divList[1], 'blue', function() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finish');
            });
        });
    }); */

	setBorderColorAsync(divList[0], 'red', firstCb);
	function firstCb() {
		setBorderColorAsync(divList[1], 'blue', secondCb);
	}
	function secondCb() {
		setBorderColorAsync(divList[2], 'green', thirdCb);
	}
	function thirdCb() {
		console.log('finish');
	}
}

function setBorderColorAsync(element, color, callback) {
	setTimeout(() => {
		element.style.border = `3px solid ${color}`;
		callback();
	}, Math.random() * 3000);
}
