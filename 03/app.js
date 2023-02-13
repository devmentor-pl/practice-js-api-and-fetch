document.addEventListener('DOMContentLoaded', init);
const promise = fetch('https://api.ipify.org?format=json');



function init() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        promise
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .then(ip => {
                document.querySelector('span').textContent = ip.ip;
            })
            .catch(err => console.error(err));
    })

}