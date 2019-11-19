# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; JS Fetch & API #01

W pliku `app.js` ponownie masz przygotowany kod, który ustawia kolor obramowania dla wyszukanych `div`-ów. Tym razem jest on zabezpieczony przed podaniem nieprawidłowego elementu czy braku callback-a.

Twoim zadaniem jest przebudować funckję `setBorderColorAsync()` w taki sposób, aby realizowała to samo przy pomocy obietnic (`Promise`) tj. powinna zwracać obiekt utworzony przy pomocy `new Promise( (resolve, reject) => ...)`;

Pamiętaj, że `resolve` to funkcja, która jest uruchamiana w przypadku powodzenia, natomiast `reject` gdy coś jest nie tak.

Po wprowadzeniu tej zmiany musisz również zmienić wykorzystanie tej funkcji zgodnie z jej obecną implementacją. Pamiętaj, że `.then` może być wielokrotnie wykorzystane.