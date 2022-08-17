document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', secondBorder);
    
    function secondBorder(){
        setBorderColorAsync(divList[1], 'blue', thirdBorder)
    }

    function thirdBorder(){
        setBorderColorAsync(divList[2], 'green', final) 
    }

    function final(){
        console.log('finish');
    }
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}