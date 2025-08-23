document.addEventListener('DOMContentLoaded', init);
const divList = document.querySelectorAll('div');
function init() {
     setBorderColorAsync(divList[0], 'red', firstCallback )
}

function firstCallback()  {
    setBorderColorAsync(divList[1], 'blue', secondCallback)

}

function secondCallback() {
    setBorderColorAsync(divList[2], 'green', lastCallback)

}

function lastCallback() {
    console.log('finish');

}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}