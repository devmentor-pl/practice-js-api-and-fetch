document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', callback1)
    
    function callback1 () {
        console.log('callback 1 is fired')
        setBorderColorAsync(divList[1], 'blue', callback2)
    }

    function callback2 () {
        console.log('callback 2 is fired')
        setBorderColorAsync(divList[2], 'green', () => {
            console.log('finish');
        });
    }
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}

