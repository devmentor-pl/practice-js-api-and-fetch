document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', firstCallback);
    function firstCallback(delay1) {
        setBorderColorAsync(divList[1], 'blue', secondCallback);
    }
    function secondCallback(delay2) {
        setBorderColorAsync(divList[2], 'green', thirdCallback);
    }
    function thirdCallback(delay3) {
        console.log('finish');
    }
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        element.style.opacity = 1; // <-- I add this line to make the div visible :) #itsnotabugitsafeature 
        callback();
    }, Math.random() * 3000);
}