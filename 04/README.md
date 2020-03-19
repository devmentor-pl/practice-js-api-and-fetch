# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; JavaScript: API & FETCH #04

W tym zadaniu musisz pobrać aktualną pogodę dla podanych w polu formularza współrzędnych. 

Wykorzystaj do tego *API* o nazwie [DARK Sky](https://darksky.net/dev), które umożliwia dziennie 1000 odpytań w darmowym planie. 

Aby móc skorzystać z tego *API* musisz się [zarejestrować](https://darksky.net/dev/register), aby uzyskać `key`.

Adres pod którym możemy pobierać dane o pogodzie to: `https://api.darksky.net/forecast/[key]/[latitude],[longitude`, gdzie:

* **key** - Twój identyfikator
* **latitude** - [szerokość geograficzna](https://pl.wikipedia.org/wiki/Szeroko%C5%9B%C4%87_geograficzna)
* **longitude** - [długość geograficzna](https://pl.wikipedia.org/wiki/D%C5%82ugo%C5%9B%C4%87_geograficzna)

Przykładowe współrzędne to:
* **Warszawa**: 52.232222, 21.008333
* **Kraków**: 50.061389, 19.938333
* **Wrocław**: 51.11, 17.022222

 Zapoznaj się z [dokumentacją](https://darksky.net/dev/docs), która prezentuje strukturę odpowiedzi. Znajdziesz tam także informacje jak pobierać dane w języku polskim.