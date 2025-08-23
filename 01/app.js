document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', setBorderBlue);

    function setBorderBlue() {
        setBorderColorAsync(divList[1], 'blue', setBorderGreen);
    }

    function setBorderGreen() {
        setBorderColorAsync(divList[2], 'green', finish);
    }

    function finish() {
        console.log('finish');
    }
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}