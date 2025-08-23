document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}



const button = document.querySelector("button")
button.addEventListener("click", showIp)


function showIp(){
const span = document.querySelector("span")
const promise = fetch("https://api.ipify.org?format=json")
promise.then((resp) => {
    

    return resp.json();
  })
  .then((data) => {
    span.innerText =data.ip;
    
  });


}