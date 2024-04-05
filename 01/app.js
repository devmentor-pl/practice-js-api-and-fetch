document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync('divList[0]', 'red', firstColor)
    
    function firstColor() {
        setBorderColorAsync(divList[0], 'red', secondColor)
    }

    function secondColor() {
        setBorderColorAsync(divList[1], 'blue', thridColor)    
    }

    function thridColor() {
        setBorderColorAsync(divList[2], 'green')    
    }
}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}





//    getAsyncData(0, firstCallback);

//    function firstCallback(delay1) {
//     getAsyncData(delay1, secondCallback);
//    }

//    function secondCallback(delay2) {
//     getAsyncData(delay2, thirdCallback);
//    }

//    function thirdCallback() {
//     console.log('started all async fn');
//    }

// function getAsyncData(delay, callback) {
//     const time = Math.random() * 2000;
//     setTimeout(function() {
//     callback(time);
//     }, delay + time);
//    }