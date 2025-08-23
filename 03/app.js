document.addEventListener('DOMContentLoaded', init);


function init() {
  console.log('DOM');
  const buttonEl = document.querySelector('button')
  if (buttonEl) {
    buttonEl.addEventListener('click', fetchIp)
    buttonEl.style.cursor = "pointer"
  }
}

const fetchIp = () => {
  const promise = fetch('https://api.ipify.org?format=json')
  const spanEl = document.querySelector('span') 

  promise
    .then(resp => {
      if(resp.ok) {
        return resp.json()
      }
      return Promise.reject(resp)
    })
    .then(data => {
      spanEl.innerText = data.ip
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Fetch request done'))
}





  