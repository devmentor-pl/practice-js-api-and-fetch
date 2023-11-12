document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const apiKey = 'f244bf8743ea42788e8bdc3e9aa9c35d'; 

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const latitude = document.querySelector('.form__field--lat').value;
        const longitude = document.querySelector('.form__field--lng').value;
        const weatherUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}&units=M&lang=pl`;

        // Rozpislem komentarze ponizej, zeby utrwalic sobie kolejnosc wykonywanych operacji poniewaz jest to dosc skomplikowane
        // I bylo duzo bledow podczas pisania tego kodu :D
        // Wysyłamy zapytanie do API pogodowego
        fetch(weatherUrl)
            .then(response => {
                // Sprawdzamy czy odpowiedz jest pomyslna
                if (!response.ok) {
                    // Jesli odpowiedz nie jest pomyslna, wyrzucamy błąd wraz z odpowiedza
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                // Jesli odpowiedz jest ok, zwracamy dane w formacie JSON
                return response.json();
            })
            .then(data => {
                // Sprawdzamy czy w odpowiedzi znajduje sie tablica danych i czy zawiera przynajmniej jeden element
                if (data.data && data.data.length > 0) {
                    // Jesli dane sa prawidlowe, wywoluje funkcje do wyswietlenia informacji o pogodzie
                    displayWeather(data);
                } else {
                    // Jesli danych nie ma lub tablica jest pusta, rejestruje blad w konsoli 
                    console.error('Weather data not found');
                }
            })
            .catch(error => {
                // Przechwytujemy i rejestrujemy wszystkie bledy, ktore wystapia podczas operacji pobierania danych
                console.error('Error fetching weather:', error);
            });
    });

    function displayWeather(data) {
        const weatherElement = document.querySelector('.weather');
        const weatherData = data.data[0]; 

        const latElement = weatherElement.querySelector('.weather__lat');
        const lngElement = weatherElement.querySelector('.weather__lng');
        const summaryElement = weatherElement.querySelector('.weather__summary');
        const temperatureElement = weatherElement.querySelector('.weather__temperature');

        latElement.textContent = weatherData.lat;
        lngElement.textContent = weatherData.lon;
        summaryElement.textContent = weatherData.weather.description;
        temperatureElement.textContent = weatherData.temp.toFixed(2);

        const adviceElement = document.querySelector('.weather__advice');
        const currentTemp = weatherData.temp;

        if (currentTemp <= 5) {
            adviceElement.textContent = 'Prosze ubrac sie cieplo, jest zimno.';
        } else if (currentTemp > 5 && currentTemp <= 15) {
            adviceElement.textContent = 'Lekkie okrycie wierzchnie będzie odpowiednie.';
        } else if (currentTemp > 15 && currentTemp <= 25) {
            adviceElement.textContent = 'Pogoda jest przyjemna, lekki strój wystarczy.';
        } else {
            adviceElement.textContent = 'Jest gorąco, nie zapomnij o nakryciu głowy i wodzie!';
        }
    }
});
