
class API {
    constructor() {
        this.url = 'https://api64.ipify.org?format=json';
    }

    loadData() {
        return this._fetch();
    }

    _fetch() {
        return fetch(this.url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }

                return Promise.reject(resp);
            })
            .then(data => {
                return data.ip;
            })

    }
}

export default API;