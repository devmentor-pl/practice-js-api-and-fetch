document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', function() {
        setBorderColorAsync(divList[1], 'blue', function() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finish');
            });
        });
    });

}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}

setBorderColorAsync(divList[0], 'red', firstDiv);

function firstDiv() {
    setBorderColorAsync(divList[1], 'blue', secondDiv);
}

function secondDiv() {
    setBorderColorAsync(divList[2], 'green', thirdDiv);
}

function thirdDiv() {
    console.log('end');
}
