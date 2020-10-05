document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const lastDiv = document.querySelector('form').lastElementChild
   // console.log(formEl)
    const input = lastDiv.querySelector('input')
    input.addEventListener('click', function(e) {
        e.preventDefault();
        // zatrzymujemy domyślną akcję formularza
        console.log('cl')
       });
       
}


// 0fe94766122940729ddf18c937fb3fc2