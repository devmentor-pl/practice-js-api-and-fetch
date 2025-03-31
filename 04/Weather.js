class Weather {
  weatherSpanElements = ["lat", "lng", "summary", "temperature"];
  constructor(api) {
    this.apiService = api;
  }

  load(coords) {
    this.apiService
      .loadData(coords)
      .then((data) => {
        if (!data.data[0]) throw new Error("no data");
        const {
          lat,
          lon: lng,
          app_temp: temperature,
          weather: { description: summary },
        } = data.data[0];
        const weatherObjData = { lat, lng, temperature, summary };
        this.#insert(weatherObjData);
      })
      .catch((err) => console.error(err));
  }

  #insert(dataObj) {
    const weatherSectionEl = document.querySelector(".weather");
    this.weatherSpanElements.forEach((element) => {
      const domEl = weatherSectionEl.querySelector(`.weather__${element}`);
      domEl.innerText = dataObj[element];
    });
  }
}

export default Weather;
