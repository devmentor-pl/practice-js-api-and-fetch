# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; JavaScript: API & FETCH #05

W tym zadaniu będziesz potrzebować narzędzia [JSON Server](https://github.com/typicode/json-server), który uruchomi lokalne API na podstawie pliku `data.json`.

We wspomnianym pliku znajdują sie już dane, które są ładowane do *HTML-a* za pomocą kodu napisanego w `app.js` - o ile lokalne *API* zostało uruchomione.

Przypominam, że można to zrobić w terminalu przy pomocy komendy: `json-server ./data.json --watch`.

Twoim zadaniem będzie napisanie obsługi formularza, która pozwoli na dodawanie danych do naszego lokalnego API.

Przypominam, że trzeba:
* wykorzystać odpowiednią metodę (`POST`)
* utworzyć obiekt na podstawie wysłanych przez formularz dancyh, który trzeba zamienić na format *JSON* (`JSON.stringify()`)
* przekazanć odpowiedni nagłówek (`'Content-Type': 'application/json'`)

Po dodaniu kolejnego użytkownika należy zaktualizować widok przy pomocy funkcji `loadUsers()`, którą należy uruchomić w odpowiednim momencie np. `finally()`.