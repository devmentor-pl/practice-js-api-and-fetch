document.addEventListener('DOMContentLoaded', init);

// function init() {
//     const divList = document.querySelectorAll('div');
    
//     setBorderColorAsync(divList[0], 'red', function() {
//         setBorderColorAsync(divList[1], 'blue', function() {
//             setBorderColorAsync(divList[2], 'green', function() {
//                 console.log('finish');
//             });
//         });
//     });

// }

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red', callBackBlue);

    function callBackBlue() {
        setBorderColorAsync(divList[1], 'blue', callBackGreen);
    }

    function callBackGreen() {
        setBorderColorAsync(divList[2], 'green', callBackFinish);
    }

    function callBackFinish() {
        console.log('finish');
    }
}