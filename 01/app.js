document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    /*setBorderColorAsync(divList[0], 'red', function() {
        setBorderColorAsync(divList[1], 'blue', function() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finish');
            });
        });
    });
    
    #1
    setBorderColorAsync(divList[0], 'red', firstCallback);

    function firstCallback() {
        setBorderColorAsync(divList[1], 'blue', secondCallback);
    }
    function secondCallback() {
        setBorderColorAsync(divList[2], 'green', thirdCallback);
    }
    function thirdCallback() {
        console.log('finish');
    }
*/
    async function colorNextBorder() {
        await setBorderColorAsync(divList[0], 'red');
        await setBorderColorAsync(divList[1], 'blue');
        await setBorderColorAsync(divList[2], 'green');

        console.log('finish');
    }

    colorNextBorder();
}

function setBorderColorAsync(element, color) {
    return new Promise((resolve) => {
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            resolve();      
        }, Math.random() * 3000);
    })
}



