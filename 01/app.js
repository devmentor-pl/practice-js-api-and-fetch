document.addEventListener('DOMContentLoaded', init);

// callback hell
// ------------------------
// function init() {
//     const divList = document.querySelectorAll('div');
//     setBorderColorAsync(divList[0], 'red', function() {
//         setBorderColorAsync(divList[1], 'blue', function() {
//             setBorderColorAsync(divList[2], 'green', function() {
//                 console.log('finish');
//             })
//         });
//     });
// }

// function setBorderColorAsync(element, color, callback) {
//     setTimeout(() => {
//         element.style.border = `3px solid ${color}`;
//         callback();
//     }, Math.random() * 3000);
// }


// function as callback and as paramter
// ------------------------
function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', firstBorder);

    function firstBorder() {
        setBorderColorAsync(divList[1], 'blue', secondBorder)
    }
    function secondBorder() {
        setBorderColorAsync(divList[1], 'blue', thirdBorder)
    }
    function thirdBorder() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finished');
            })
    }
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}









