document.addEventListener('DOMContentLoaded', init);
const divList = document.querySelectorAll('div');

function init() {

    setBorderColorAsync(divList[0], 'red', firstCallback)

    // callback hell
    
    //     setBorderColorAsync(divList[1], 'blue', function () {
    //         setBorderColorAsync(divList[2], 'green', function () {
    //             console.log('finish');
    //         });
    //     });
    // });

}

function firstCallback() {
    setBorderColorAsync(divList[1], 'blue', secondCallback)
}

function secondCallback() {
    setBorderColorAsync(divList[2], 'green', thirdCallback)
}

function thirdCallback() {
    console.log('Finish')
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}