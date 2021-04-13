> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `#s1e09-js-api-and-fetch` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` JavaScript: API oraz FETCH


W tym zadaniu będziesz potrzebować narzędzia [JSON Server](https://github.com/typicode/json-server), który uruchomi lokalne API na podstawie pliku `data.json`.

We wspomnianym pliku znajdują sie już dane, które są ładowane do *HTML-a* za pomocą kodu napisanego w `app.js` - o ile lokalne *API* zostało uruchomione.

Przypominam, że można to zrobić w terminalu przy pomocy komendy: `json-server ./data.json --watch`.

Twoim zadaniem będzie napisanie obsługi formularza, która pozwoli na dodawanie danych do naszego lokalnego API.

Przypominam, że trzeba:
* wykorzystać odpowiednią metodę (`POST`)
* utworzyć obiekt na podstawie wysłanych przez formularz dancyh, który trzeba zamienić na format *JSON* (`JSON.stringify()`)
* przekazanć odpowiedni nagłówek (`'Content-Type': 'application/json'`)

Po dodaniu kolejnego użytkownika należy zaktualizować widok przy pomocy funkcji `loadUsers()`, którą należy uruchomić w odpowiednim momencie np. `finally()`.

> *Uwaga! Podczas tworzenia rozwiązań wykorzystujących API, możesz się spotkać z problemem dotyczącym [CORS](https://sekurak.pl/czym-jest-cors-cross-origin-resource-sharing-i-jak-wplywa-na-bezpieczenstwo/). Jeśli on wystąpi to nie będziesz mógł pobrać danych z API. Wszystko zależy od konfiguracji przeglądarki i serwera, a problem zidentyfikujesz przez [odpowiedni komunikat w konsoli](https://www.google.com/search?q=cors+problem&source=lnms&tbm=isch). Możesz próbować wyłączyć to zabezpieczenie w przeglądarce przez [odpowiedni plugin](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc) lub wykorzystująć [pośrednika](https://jsonp.afeld.me/). Problem też może być spowodowany również tym, że uruchamiasz plik przez protokół `file://`. Wystarczy wtedy uruchomić plik `.html` przy pomocy rozszerzenia [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VSC.*


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
