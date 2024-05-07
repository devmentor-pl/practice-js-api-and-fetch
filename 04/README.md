> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e09-js-api-and-fetch` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` JavaScript: API oraz FETCH

W tym zadaniu musisz pobrać aktualną pogodę dla podanych w polu formularza współrzędnych. 

Wykorzystaj do tego API o nazwie [weatherbit.io](https://www.weatherbit.io/), które umożliwia wykonanie [500 odpytań dziennie w darmowym planie](https://www.weatherbit.io/pricing#standard).

Aby móc skorzystać z tego API, musisz [zarejestrować się](https://www.weatherbit.io/account/create) i uzyskać tzw. `key`.

Adres, pod którym dostępne są dane o pogodzie to: `https://api.weatherbit.io/v2.0/current?key=[key]&lat=[latitude]&lon=[longitude]`, gdzie:

* **[key]** – to Twój identyfikator,
* **[latitude]** – [szerokość geograficzna](https://pl.wikipedia.org/wiki/Szeroko%C5%9B%C4%87_geograficzna),
* **[longitude]** – [długość geograficzna](https://pl.wikipedia.org/wiki/D%C5%82ugo%C5%9B%C4%87_geograficzna).

Przykładowe współrzędne to:
* **Warszawa**: 52.232222, 21.008333,
* **Kraków**: 50.061389, 19.938333,
* **Wrocław**: 51.11, 17.022222.

 Zapoznaj się z [dokumentacją](https://www.weatherbit.io/api/weather-current), która prezentuje strukturę odpowiedzi. Znajdziesz tam również informacje o tym, jak pobierać dane w języku polskim.

 **Uwaga!** Podczas tworzenia rozwiązań wykorzystujących API, możesz się spotkać z problemem dotyczącym [CORS](https://sekurak.pl/czym-jest-cors-cross-origin-resource-sharing-i-jak-wplywa-na-bezpieczenstwo/). Jeśli on wystąpi, to nie będziesz mógł pobrać danych z API. Wszystko zależy od konfiguracji przeglądarki i serwera. Problem zidentyfikujesz przez [odpowiedni komunikat w konsoli](https://www.google.com/search?q=cors+problem&source=lnms&tbm=isch). Możesz próbować wyłączyć to zabezpieczenie w przeglądarce przez [odpowiedni plugin](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc) lub wykorzystać [pośrednika](https://github.com/Rob--W/cors-anywhere/).
 Problem z CORS może być spowodowany również tym, że uruchamiasz plik przez protokół `file://`. Wówczas wystarczy, że uruchomisz plik `.html` przy pomocy rozszerzenia [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VSC.


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-api-and-fetch/)*

> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:
