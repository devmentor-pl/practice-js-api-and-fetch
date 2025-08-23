const apiUrl = 'http://localhost:3000/users';


const init = () => {
    loadUsers();

    const button = document.querySelector('.form__submit');
    button.addEventListener('click' , addUser)
}

const loadUsers = () => {

    const promise = fetch(apiUrl);

    promise
        .then(resp => {
            if(resp.ok) { return resp.json() }
            return Promise.reject(resp);
        })
        .then(data => insertUsers(data))
        .catch(err => console.error(err))
}

const addUser = e => {
    e.preventDefault();

    const data = {
        firstName,
        lastName
    } = getData();

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    };

    fetch( apiUrl, options )
        .then( resp => console.log(resp) )
        .catch( err => console.log(err) )
        .finally( loadUsers )
}

const getData = () => {
    const firstName = document.querySelector('.form__field--first-name').value;
    const lastName = document.querySelector('.form__field--last-name').value;

    return {
        firstName,
        lastName
    }
}

const insertUsers = usersList => {

    const ulElement = document.querySelector('.users');
    ulElement.innerHTML = '';

    usersList.forEach( user => {
        const liElement = document.createElement('li');
        liElement.innerText = `${user.firstName} ${user.lastName}`;

        ulElement.appendChild(liElement);
    });
}


document.addEventListener('DOMContentLoaded', init);