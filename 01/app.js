document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red');
    setBorderColorAsync(divList[1], 'blue');
    setBorderColorAsync(divList[2], 'green')

};




 

function setBorderColorAsync(element, color) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
    }, Math.random() * 3000);
}
