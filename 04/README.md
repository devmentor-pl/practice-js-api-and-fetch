# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; JavaScript: API & FETCH #04

> :loudspeaker: Jeśli chciałbyś więcej tego typu zadań to zapraszam do :moneybag: [wsparcia mojego konta](https://github.com/sponsors/devmentor-pl)!

&nbsp;

W tym zadaniu musisz pobrać aktualną pogodę dla podanych w polu formularza współrzędnych. 

Wykorzystaj do tego *API* o nazwie [weatherbit.io](https://www.weatherbit.io/), które umożliwia wykonać dziennie [500 odpytań w darmowym planie](https://www.weatherbit.io/pricing#standard). 

Aby móc skorzystać z tego *API* musisz się [zarejestrować](https://www.weatherbit.io/account/create), aby uzyskać tzw. `key`.

Adres pod którym możemy pobierać dane o pogodzie to: `https://api.weatherbit.io/v2.0/current?key=[key]&lat=[latitude]&lon=[longitude]`, gdzie:

* **[key]** - Twój identyfikator
* **[latitude]** - [szerokość geograficzna](https://pl.wikipedia.org/wiki/Szeroko%C5%9B%C4%87_geograficzna)
* **[longitude]** - [długość geograficzna](https://pl.wikipedia.org/wiki/D%C5%82ugo%C5%9B%C4%87_geograficzna)

Przykładowe współrzędne to:
* **Warszawa**: 52.232222, 21.008333
* **Kraków**: 50.061389, 19.938333
* **Wrocław**: 51.11, 17.022222

 Zapoznaj się z [dokumentacją](https://www.weatherbit.io/api/weather-current), która prezentuje strukturę odpowiedzi. Znajdziesz tam także informacje jak pobierać dane w języku polskim.

> *Uwaga! Podczas tworzenia rozwiązań wykorzystujących API, możesz się spotkać z problemem dotyczącym [CORS](https://sekurak.pl/czym-jest-cors-cross-origin-resource-sharing-i-jak-wplywa-na-bezpieczenstwo/). Jeśli on wystąpi to nie będziesz mógł pobrać danych z API. Wszystko zależy od konfiguracji przeglądarki i serwera, a problem zidentyfikujesz przez [odpowiedni komunikat w konsoli](https://www.google.com/search?q=cors+problem&source=lnms&tbm=isch). Możesz próbować wyłączyć to zabezpieczenie w przeglądarce przez [odpowiedni plugin](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc) lub wykorzystująć [pośrednika](https://jsonp.afeld.me/). Problem też może być spowodowany również tym, że uruchamiasz plik przez protokół `file://`. Wystarczy wtedy uruchomić plik `.html` przy pomocy rozszerzenia [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VSC.*
 
&nbsp;

> :warning: Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-api-and-fetch/)