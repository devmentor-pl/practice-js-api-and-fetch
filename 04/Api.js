class Api {
  constructor() {
    this.API_KEY = "d8b76c86be6b427bb9e7d662826f1f03";
    this.URL = "https://api.weatherbit.io/v2.0/current";
    this.DEFAULT_CORDS = [52.232222, 21.008333];
  }

  loadData(coordsArr = this.DEFAULT_CORDS) {
    const coordsUrl = this.#createCordsString(coordsArr);
    return this.#fetch(coordsUrl);
  }

  #fetch(coords) {
    return fetch(
      `${this.URL}?key=${this.API_KEY}${coords}&units=I&lang=pl`
    ).then((resp) => {
      if (resp.ok) return resp.json();
      return Promise.reject(resp);
    });
  }

  #createCordsString([lat, long]) {
    return `&lat=${lat}&lon=${long}`;
  }
}

export default Api;
