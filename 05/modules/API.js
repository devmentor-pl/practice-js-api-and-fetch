class API {
    constructor() {
        this.url = 'http://localhost:3000/users';
    }

    loadData() {
        return this._fetch();
    }

    addData(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json', }
        }

        return this._fetch(options);
    }

    _fetch(options) {
        return fetch(this.url, options)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }

                return Promise.reject(resp);
            });
    }
}

export default API;