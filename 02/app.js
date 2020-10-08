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
//const promise = new Promise((resolve, reject) =>{

function init() {
    const divList = document.querySelectorAll('div');
    
    // setBorderColorAsync(divList[0], 'red', function() {
    //     setBorderColorAsync(divList[1], 'blue', function() {
    //         setBorderColorAsync(divList[2], 'green', function() {
    //             console.log('finish');
    //         });
    //     });
    // });
    // const promise = setBorderColorAsync(divList[0], 'red', firstCallback)
    
    //  function firstCallback() {
    //     setBorderColorAsync(divList[1], 'blue', secondCallback);
    //     }
    //    function secondCallback() {
    //     setBorderColorAsync(divList[2], 'green', thirdCallback);
    //    }
    //    function thirdCallback() {
    //     console.log('done?');
    //    }

    //    promise.then(resp => console.log(resp))
    // .catch(err => console.error(err));

        setBorderColorAsync(divList[0], 'red')
            .then(() => setBorderColorAsync(divList[1], 'blue'))
            .then(()=>setBorderColorAsync(divList[2], 'green'))
        

    .then(values => console.log(values))
    .catch(err => console.error(err));
   
}
function setBorderColorAsync(element, color, callback) {
    const promise = new Promise((resolve, reject) =>{
        if(element && element instanceof HTMLElement) {
            // sprawdzam czy parametr jest elementem DOM, więcej:
            // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
           
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve('jest')
                    callback();
                }, Math.random() * 3000);

        } else {
            //alert
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        }
    })
    return promise
}
