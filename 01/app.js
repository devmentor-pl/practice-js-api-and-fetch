document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', firstCallBack);
    function firstCallBack() { setBorderColorAsync(divList[1], 'blue', secondCallBack) };
    function secondCallBack() { setBorderColorAsync(divList[2], 'green', thirdCallBack) };
    function thirdCallBack() { console.log('finish') };
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}