document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    setBorderColorAsync(divList[0], 'red', setBlueBorder);
}

function setBlueBorder(divListElement){
    setBorderColorAsync(divListElement,'blue', setGreenBorder);
}

function setGreenBorder(divListElement){
    setBorderColorAsync(divListElement,'green', printFinish);
}

function printFinish(){
    console.log('Finish');
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback(element.firstElementChild);
    }, Math.random() * 3000);
}