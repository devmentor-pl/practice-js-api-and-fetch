document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = _getAllDivs();
    setBorderColorAsync(divList[0], 'red', _setGreen);
};

function _setGreen(www) {
    setBorderColorAsync(www, 'green', _setBlue)
};

function _setBlue(www) {
    setBorderColorAsync(www, 'blue', print)
};

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        console.log(color);
        element.style.border = `3px solid ${color}`;
        callback(element)
    }, _getRandomTime());
}
function print() {
  console.log('print')  
};
// *********************************



// helping functions





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