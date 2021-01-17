document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', afterRed);
}

function afterRed() {
    setBorderColorAsync(divList[1], 'blue', afterBlue);
}

function afterBlue() {
    setBorderColorAsync(divList[2], 'green', afterGreen);
}

function afterGreen() {
    console.log('finish');
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}