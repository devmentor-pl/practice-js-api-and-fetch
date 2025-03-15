document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    const setRedColor = () => setBorderColorAsync(divList[0], 'red', setBlueColor);
    const setBlueColor = () => setBorderColorAsync(divList[1], 'blue', setGreenColor);
    const setGreenColor = () => setBorderColorAsync(divList[2], 'green', finish);
    const finish = () => console.log('finish');

    setRedColor();
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}