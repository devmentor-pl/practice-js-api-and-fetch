document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red', setGreen);
};

function setGreen(div) {
    setBorderColorAsync(div, 'green', setBlue);
};
function setBlue(div) {
    setBorderColorAsync(div, 'blue', printText);
};
function printText(div) {
    console.log('finish');
};

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        nextDiv = element.querySelector('div');
        callback(nextDiv);
    }, Math.random() * 3000);
};






function _getAllDivs() {
    return document.querySelectorAll('div');
};