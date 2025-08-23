
document.addEventListener('DOMContentLoaded', init);

const divList = document.querySelectorAll('div');

// kontrolka div-ów
for (let i = 0; i < divList.length; i++) {
    setTimeout(() => {
        console.log(divList[i])
    }, i * 100);
}

function firstCallBack() {setBorderColorAsync(divList[1], 'blue', secondCallBack)};
function secondCallBack() {setBorderColorAsync(divList[2], 'green', thirdCallBack)};
function thirdCallBack() {console.log('finish')};


function init() {
    
    setBorderColorAsync(divList[0], 'red', firstCallBack);

    firstCallBack()
    secondCallBack()
    thirdCallBack()
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}
