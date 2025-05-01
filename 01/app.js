document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    // setBorderColorAsync(divList[0], 'red', function() {
    //     setBorderColorAsync(divList[1], 'blue', function() {
    //         setBorderColorAsync(divList[2], 'green', function() {
    //             console.log('finish');
    //         });
    //     });
    // });

    setBorderColorZero(divList)

}

function setBorderColorZero(divs) {
    if( divs.length > 0 ) {
        setBorderColorAsync(divs[0], 'red', () => setBorderColorOne(divs))
    }
}
function setBorderColorOne(divs) {
    if( divs.length > 1 ) {
        setBorderColorAsync(divs[1], 'blue', () => setBorderColorTwo(divs))
    }
}
function setBorderColorTwo(divs) {
    if( divs.length > 2 ) {
        setBorderColorAsync(divs[2], 'green', () => console.log('finish'))
    }
}

function setBorderColorAsync(element, color, callback) {
    if (callback) {
        callback()
    }
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        // callback();
    }, Math.random() * 3000);
}