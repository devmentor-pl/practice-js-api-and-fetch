> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `#s1e09-js-api-and-fetch` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#02` JavaScript: API oraz FETCH

W pliku `app.js` ponownie masz przygotowany kod, który ustawia kolor obramowania dla wyszukanych `divów`. Tym razem jest on zabezpieczony przed podaniem nieprawidłowego elementu czy przed brakiem *callbacka*.

Twoim zadaniem jest przebudowanie funkcji `setBorderColorAsync()` w taki sposób, aby realizowała swoje dotychczasowe zadanie przy pomocy obietnic (`Promise`), tj. powinna zwracać obiekt utworzony przy pomocy `new Promise( (resolve, reject) => ...)`;

Pamiętaj, że `resolve` to funkcja, która jest uruchamiana w przypadku powodzenia, natomiast `reject` – w przypadku, gdy coś jest nie tak.

Po wprowadzeniu zmian musisz również zmienić wykorzystanie tej funkcji zgodnie z jej obecną implementacją. Pamiętaj, że `.then` może być wykorzystane wielokrotnie.


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../01) | [*następne zadanie*](./../03) :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
