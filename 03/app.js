document.addEventListener('DOMContentLoaded', init);

function init() {
    
    console.log('DOM');
    const button = document.querySelector('button');
    const span = document.querySelector('span');
    function buttonClick(){
       // console.log('click')
        const promise = fetch('https://api.ipify.org?format=json')
        promise
            .then(resp => resp.json())
            .then(ip => span.innerText=ip.ip)
        //span.innerText= ip;
    }
    button.addEventListener('click', buttonClick)
}

// {
//     "kind": "Status",
//     "apiVersion": "v1",
//     "metadata": {
      
//     },
//     "status": "Failure",
//     "message": "forbidden: User \"system:anonymous\" cannot get path \"/\"",
//     "reason": "Forbidden",
//     "details": {
      
//     },
//     "code": 403
//   }