class API {
    constructor() {
        // to check real time data set "this.API.enabled" to "true"
        this.API = {
            url: 'https://api.weatherbit.io/v2.0/current?key=ffc13da65b494013b12370e7bdecb3f0',
            enabled: true,
        };
        this.apiStub = {
            "data": {
                "wind_cdir": "NE",
                "rh": 59,
                "pod": "d",
                "lon": -78.63861,
                "pres": 1006.6,
                "timezone": "America\/New_York",
                "ob_time": "2017-08-28 16:45",
                "country_code": "US",
                "clouds": 75,
                "vis": 10,
                "wind_spd": 6.17,
                "gust": 8,
                "wind_cdir_full": "northeast",
                "app_temp": 24.25,
                "state_code": "NC",
                "ts": 1503936000,
                "h_angle": 0,
                "dewpt": 15.65,
                "weather": {
                    "icon": "c03d",
                    "code": 803,
                    "description": "Broken clouds"
                },
                "uv": 2,
                "aqi": 45,
                "station": "CMVN7",
                "sources": ["rtma", "CMVN7"],
                "wind_dir": 50,
                "elev_angle": 63,
                "datetime": "2017-08-28:17",
                "precip": 0,
                "ghi": 444.4,
                "dni": 500,
                "dhi": 120,
                "solar_rad": 350,
                "city_name": "Raleigh",
                "sunrise": "10:44",
                "sunset": "23:47",
                "temp": 24.19,
                "lat": 35.7721,
                "slp": 1022.2
            }
        };
        this.dataForAPI = {
            lat: '',
            lng: '',
            units: 'I',
            lang: 'pl',
        };
    }

    getGeoCoords(geoCoordsFromInputs) {
        const { lat, lng } = geoCoordsFromInputs;
        this.dataForAPI.lat = lat;
        this.dataForAPI.lng = lng;
    }

    loadData() {
        return this._fetch();
    }

    _fetch() {
        const { lat, lng, units, lang } = this.dataForAPI;
        const url = `${this.API.url}&lat=${lat}&lon=${lng}&units=${units}&lang=${lang}`;

        if (this._isApiEnabled()) {
            return fetch(url)
                .then(resp => {
                    if (resp.ok) {
                        return resp.json();
                    }
                    return Promise.reject(resp);
                })
                .then(resp => {
                    const [weatherData] = resp.data;

                    return weatherData;
                })
        } else {
            return new Promise((resolve, reject) => {
                resolve(this.apiStub.data);
            });
        }
    }

    _isApiEnabled() {
        if (this.API.enabled) {
            return true
        }
    }
}

export default API;