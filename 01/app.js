document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', firstCallback);

    function setBorderColorAsync(element, color, callback) {
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            callback();
        }, Math.random() * 3000);
    }
    
    function firstCallback() {
        setBorderColorAsync(divList[1], 'blue', secondCallback);
    }
    
    function secondCallback() {
        setBorderColorAsync(divList[2], 'green', lastCallback);
    }
    
    function lastCallback() {
        console.log('finish')
    }
}


