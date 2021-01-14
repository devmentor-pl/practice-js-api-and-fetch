const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector(".form");
    const firstInput = document.querySelector(".form__field--first-name");
    const secInput = document.querySelector(".form__field--last-name");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let obj = {
            id: undefined, 
            firstName: undefined,
            lastName: undefined,
        }
        obj.firstName = firstInput.value;
        obj.lastName = secInput.value;
        console.log(obj)
        const options = {
            method:'POST', 
            body:JSON.stringify( obj ), 
            headers: { "Content-Type":"application/json" },
            }
            const promise = fetch('http://localhost:3000/users', 
            options,
            );
            promise    
                .then(resp=> {
                    if(resp.ok) { return resp.json(); }
                    return Promise.reject(resp);    
                })    
                .then(data => console.log(data))
                .catch(err=>console.error(err));    
    })
    
    loadUsers();
}

function loadUsers() {
    const promise = fetchGet(apiUrl);

    promise
        .then(data => insertUsers(data))
        .catch(err => console.error(err));
}

function fetchGet(url) {
    return fetch(url)
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }

            return Promise.reject(resp);
        });
}

function insertUsers(usersList) {
    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';
    usersList.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}
