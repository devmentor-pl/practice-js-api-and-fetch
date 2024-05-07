> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e09-js-api-and-fetch` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#02` JavaScript: API oraz FETCH

W pliku `app.js` ponownie masz przygotowany kod, który ustawia kolor obramowania dla wyszukanych `divów`. Tym razem jest on zabezpieczony przed podaniem nieprawidłowego elementu czy przed brakiem *callbacka*.

Twoim zadaniem jest przebudowanie funkcji `setBorderColorAsync()` w taki sposób, aby realizowała swoje dotychczasowe zadanie przy pomocy obietnic (`Promise`), tj. powinna zwracać obiekt utworzony przy pomocy `new Promise( (resolve, reject) => ...)`;

Pamiętaj, że `resolve` to funkcja, która jest uruchamiana w przypadku powodzenia, natomiast `reject` – w przypadku, gdy coś jest nie tak.

Po wprowadzeniu zmian musisz również zmienić wykorzystanie tej funkcji zgodnie z jej obecną implementacją. Pamiętaj, że `.then` może być wykorzystane wielokrotnie.


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-api-and-fetch/)*

> :arrow_left: [*poprzednie zadanie*](./../01) | [*następne zadanie*](./../03) :arrow_right:
