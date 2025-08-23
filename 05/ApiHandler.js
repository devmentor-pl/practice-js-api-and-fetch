class ApiHandler {
	constructor() {
		this.apiUrl = 'http://localhost:3000';
	}
	load(resource) {
		return this._fetch(resource);
	}

	create(resource, userData) {
		const options = {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: { 'Content-Type': 'application/json' },
		};
		return this._fetch(resource, options);
	}

	_fetch(resource = '', options = { method: 'GET' }) {
		const path = this.apiUrl + resource;
		const promise = fetch(path, options);

		return promise
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
				return Promise.reject(resp);
			})
			// dlaczego ten console log psuje mi wysylanie danych do app.js skoro w górnym then juz retrunuje resp.json, to dlaczego console.log moze mi psuc cala logike?!
			// .then(data => console.log(data))
			.catch(err => console.error(err))
			// finaly tutaj nie ma sensu bo tworze petle, finally ma sens jesli jest kilka fetchy'y bo wtedy mozna dodac finally do fetrcha ktory nie obsluguje odczytywania tylko np tylko dodaje wtedy moze odswiezyc i nie wywola petli? takie moje przemyslenia
		}
}
export default ApiHandler;
