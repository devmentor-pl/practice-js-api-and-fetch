
document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    console.log(divList)
    setBorderColorAsync(divList[0], 'red', getColor);    


    function getColor() {
        setBorderColorAsync(divList[1], 'blue', getColor2);
    }
    function getColor2() {
        setBorderColorAsync(divList[2], 'green', finish);
    }
    function finish() {
        console.log('finish')
    }
}




function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;

        const div = element.querySelector('div');
        callback(div);
    }, Math.random() * 3000);
}


//----------------------------------------------
// document.addEventListener('DOMContentLoaded', init);

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

// function setBorderColorAsync(element, color, callback) {
//     setTimeout(() => {
//         element.style.border = `3px solid ${color}`;
//         callback();
//     }, Math.random() * 3000);
// }