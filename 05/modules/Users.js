class Users {
    constructor(api) {
        this.api = api;
        this.formEl = document.querySelector('.form');
    }

    load() {
        this.api.loadData()
            .then(data => this.insertUsersList(data))
            .catch(err => console.error(err))
    }

    insertUsersList(users) {
        const ulElement = this._findListRoot();

        this._clearElement(ulElement);

        users.forEach(user => {
            const liElement = this._createElement('li', 'users__item');

            liElement.innerText = `${user.firstName} ${user.lastName}`;

            ulElement.appendChild(liElement);
        });
    }

    addNewUserToApi() {
        this.formEl.addEventListener('submit', e => this.handleSubmit(e))
    }

    handleSubmit(e) {
        e.preventDefault();

        const errors = [];

        this._validateInputs(errors);

        if (this._isElementEmpty(errors)) {
            const [firstName, lastName] = e.target.elements;
            const data = {
                firstName: firstName.value,
                lastName: lastName.value,
            };

            this.sendToApi(data);
        }

        this._renderErrors(errors);
    }

    sendToApi(data) {
        this.api.addData(data)
            .catch(err => console.log(err))
            .finally(() => this.load());
    }

    _validateInputs(errors) {
        const fields = [
            { name: 'firstName', label: 'firstName', required: true, pattern: `^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]`, },
            { name: 'lastName', label: 'lastName', required: true, pattern: `^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]`, },
        ];

        fields.forEach(field => {
            const { name, label, required, pattern } = field;
            const inputValue = this.formEl.elements[name].value;

            if (required) {
                if (this._isElementEmpty(inputValue)) {
                    errors.push(`Pole ${label} jest wymagane.`);
                }
            }
            if (inputValue.length > 0 && pattern) {
                if (this._isNotValidPattern(pattern, inputValue)) {
                    errors.push(`Wprowadź poprawną wartość w polu ${label}.`);
                }
            }
        })
    }

    _findListRoot() {
        return document.querySelector('.users')
    }

    _renderErrors(errors) {
        if (!this._isElementEmpty(errors)) {
            this._renderFormErrors(errors);
        }
    }

    _renderFormErrors(errors) {
        const errorsList = this._createList(errors, 'form__errors-list', 'form__errors-list-item');
        errorsList.style.color = 'red';
        errorsList.style.listStyle = 'none';

        this._clearErrorsList();

        this.formEl.insertBefore(errorsList, this.formEl.lastElementChild);
    }

    _clearErrorsList() {
        this._removeElement(this.formEl, '.form__errors-list');
    }

    _isNotValidPattern(pattern, inputValue) {
        const reg = new RegExp(pattern);
        if (!reg.test(inputValue)) { return true }
    }

    _isElementEmpty(element) {
        if (element.length === 0) return true;
    }

    _createList(itemsContent, listClass, itemClass) {
        const listEl = this._createElement('ul', listClass);

        itemsContent.forEach((itemContent) => {
            const listItem = this._createElement('li', itemClass);

            listItem.innerText = itemContent;

            listEl.appendChild(listItem);
        });

        return listEl;
    }

    _clearElement(element) {
        element.innerHTML = '';
    }

    _createElement(element, className) {
        const newElement = document.createElement(element);

        newElement.classList.add(className);

        return newElement;
    }

    _removeElement(parentEl, selectorToRemove) {
        const elementToRemove = parentEl.querySelector(selectorToRemove);

        if (elementToRemove) {
            parentEl.removeChild(elementToRemove);
        }
    }
}

export default Users;