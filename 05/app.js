// const apiUrl = 'http://localhost:3000/users';

// document.addEventListener('DOMContentLoaded', init);

// function init() {
//   loadUsers();
//   removeUsers();
//   addUsers();
// }

// function loadUsers() {
//   const promise = fetchGet(apiUrl);

//   promise.then((data) => insertUsers(data)).catch((err) => console.error(err));
// }

// function fetchGet(url) {
//   return fetch(url).then((resp) => {
//     if (resp.ok) {
//       //   console.log(resp.json());
//       return resp.json();
//     }

//     return Promise.reject(resp);
//   });
// }

// function insertUsers(usersList) {
//   const ulElement = document.querySelector('.users');
//   ulElement.innerHTML = '';
//   usersList.forEach((user) => {
//     const liElement = document.createElement('li');
//     liElement.innerText = `${user.firstName} ${user.lastName}`;
//     liElement.dataset.id = user.id;

//     ulElement.appendChild(liElement);
//   });
// }

// function removeUsers() {
//   const ulEl = document.querySelector('.users');
//   ulEl.addEventListener('click', (e) => {
//     const targetEl = e.target;
//     if (targetEl.tagName === 'LI') {
//       const id = targetEl.dataset.id;
//       const options = {method: 'DELETE'};
//       fetch(`${apiUrl}/${id}`, options)
//         .then((resp) => console.log(resp))
//         .catch((err) => console.error(err))
//         .finally(loadUsers);
//     }
//   });
// }

// function addUsers() {
//   const form = document.querySelector('form');
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target.elements[0].value);
//     const {firstName, lastName} = e.target.elements;
//     if (!firstName.value && !lastName.value) {
//       alert('Puste pola formularza');
//       return;
//     }
//     const data = {
//       firstName: firstName.value,
//       lastName: lastName.value,
//     };
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {'Content-Type': 'application/json'},
//     };
//     fetch(apiUrl, options)
//       .then((resp) => console.log(resp))
//       .catch((err) => console.error(err))
//       .finally(loadUsers);
//   });
// }

const apiUrl = 'http://localhost:3000/users';

document.addEventListener('DOMContentLoaded', init);

async function init() {
  try {
    await fetchData();
  } catch (error) {
    console.log('Błąd w pobieraniu danych', error);
  }
  const formEl = document.querySelector('.form');
  formEl &&
    formEl.addEventListener('submit', (e) => {
      addUsers(e);
    });
  removeUsers();
}

async function fetchData() {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error(`Błąd: ${res.status}`);
  }
  try {
    const data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log('Nie mona pobrać danych', error);
  }
}
function displayData(users) {
  const ulEl = document.querySelector('.users');
  ulEl.innerHTML = '';
  users.forEach((user) => {
    const item = document.createElement('li');
    item.dataset.id = user.id;
    ulEl.appendChild(item);
    const {firstName, lastName} = user;
    item.textContent = `${firstName}, ${lastName}`;
  });
}
async function addUsers(e) {
  e.preventDefault();
  const {firstName, lastName} = e.target.elements;
  if (!firstName.value && !lastName.value) {
    alert('Pola formularza nie mogą być puste');
    return;
  }
  console.log(firstName, lastName);
  const dataObject = {
    firstName: firstName.value,
    lastName: lastName.value,
  };
  const options = {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {'Content-Type': 'application/json'},
  };
  try {
    const resp = await fetch(apiUrl, options);
    console.log(resp);
  } catch (error) {
    console.log('Błąd', error);
  } finally {
    await fetchData();
  }
}

async function removeUsers() {
  const ulEl = document.querySelector('.users');

  ulEl.addEventListener('click', async (e) => {
    const targetEl = e.target;
    if (targetEl.tagName === 'LI') {
      const id = targetEl.dataset.id;
      const options = {method: 'DELETE'};

      try {
        const resp = await fetch(`${apiUrl}/${id}`, options);
        console.log(resp);
      } catch (error) {
        console.error('Błąd', error);
      } finally {
        await fetchData();
      }
    }
  });
}
