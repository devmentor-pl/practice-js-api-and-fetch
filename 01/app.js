document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', runBlue)

    function runBlue() {
        setBorderColorAsync(divList[1], 'blue', runGreen)
    }

    function runGreen(){
        setBorderColorAsync(divList[2], 'green', runFinish);
    }

    function runFinish(){
        console.log('finish');
    }
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}