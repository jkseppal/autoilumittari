# Autoilumittari

Tämä sovellus on toteutettu ratkaisuksi Solidabiksen koodihaasteeseen kesällä 2021. Sovellus koostuu Reactilla toteutetusta frontendistä, jossa on lisäksi käytössä React-Bootstrap framework. Ratkaisu on toteutettu koneella, jossa on Windows-käyttöjärjestelmä.

## Esivaatimukset

Sovellusta käytettäessä tulee olla [node](https://nodejs.org/en/download/) asennettuna.

Kopioi repositorio omalle koneellesi:

### `git clone https://github.com/jkseppal/autoilumittari`

Asenna tarvittavat pakkaukset:

### `npm install`

Käynnistä sovellus:

### `npm start`

Tuotantoversion luominen:

### `npm run build`

## Sovelluksesta

Sovelluksessa on päädytty ratkaisuun, jossa käyttäjän ei tule painaa mitään nappia, vaan laskenta tapahtuu reaaliaikaisesti käyttäjän muuttaessa laskenta-arvoja. Syötteet antamiseen on valittu valintakentät mahdollisten käyttäjän virheiden ja epäkelpojen arvojen eliminoimiseksi.

Sovelluksen etusivu löytyy komponentista App.js, jonka sisältönä on lisäksi lomake MainForm.js sekä laskennan tuloksen sisältävä Result.js. Tehtävänannossa annettujen vaatimusten lisäksi sovellukseen on annettu käyttäjälle mahdollisuus myös syöttää polttoaineen hinta, jolloin sovellus laskee lisäksi matkan taloudelliset kustannukset.
