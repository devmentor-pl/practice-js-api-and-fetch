document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red', firstCallback);

    function firstCallback(element2, color2) {
        setBorderColorAsync(divList[1], 'blue', secondCallback )
    }

    function secondCallback(element3, color3) {
        setBorderColorAsync(divList[2], 'green', thirdCallback )
    }

    function thirdCallback() {
        console.log('finish');
    }
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}