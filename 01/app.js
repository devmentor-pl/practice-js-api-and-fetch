/* document.addEventListener('DOMContentLoaded', init);

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

*/

// asynchronicznosć z callbackiem

function setBorderColorAsyncCall(element, color, callback){

    setTimeout(

        function(){

            element.style.border =  `3px solid ${color}`
            element.style.borderRadius = '2px'
            console.log(`Kolor ${color}`)

        if(typeof callback === `function`){
            callback()
        }    
        
        }, 1000) // setTiemout

}

function initCallback(){

    const divList = document.querySelectorAll('div')

    setBorderColorAsyncCall(divList[0], 'pink', function(){
        setBorderColorAsyncCall(divList[1], 'dakrblue', function(){
            setBorderColorAsyncCall(divList[2], 'darkgreen', function(){
                console.log('finish first')
            })
        })
    })
    
}

initCallback()


// Promise zamiast callbacka

function setBorderColorAsyncSecound(element, color){

    return new Promise((setBorderStyle) => {

        setTimeout(() => {
            element.style.border = `5px solid ${color}`
            element.style.borderRadius = `4px`
            console.log(`Kolor ustawiony na ${color}`)
            setBorderStyle()

        }, 2000 )
    })
}

function MyInit(){

    const divList = document.querySelectorAll('div')

    setBorderColorAsyncSecound(divList[0], 'red')

    .then(() => setBorderColorAsyncSecound(divList[1], 'blue'))
    .then(() => setBorderColorAsyncSecound(divList[2], 'green'))
    .then(() => console.log('finish secound'))

}

MyInit()



// Async await 

function setBorderColorAsyncThird(element, color){

    return new Promise((setBorderStyle) => {
        setTimeout(() => {
            element.style.border = `8px solid ${color}`
            element.style.borderRadius = `16px`
            console.log(`Kolor ustwiony na ${color}`)
            setBorderStyle()

                        }, 3000
                )
    }) 
}

function MyinitThird(){
    
    const divList = document.querySelectorAll('div')

    setBorderColorAsyncThird(divList[0], 'black')

    .then(() => setBorderColorAsyncThird(divList[1], 'grey'))
    .then(() => setBorderColorAsyncThird(divList[2], 'brown'))
    .then(() => console.log('finish third'))
}


MyinitThird()