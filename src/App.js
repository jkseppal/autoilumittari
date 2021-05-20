import React, { useState } from 'react'
import MainForm from './components/MainForm'
import Result from './components/Result'

const App = () => {
  const [car, setCar] = useState(0)
  const [distance, setDistance] = useState(1)
  const [velocity1, setVelocity1] = useState(1)
  const [velocity2, setVelocity2] = useState(1)
  const [price, setPrice] = useState(1.00)

  const handleDistanceChange = (event) => {
    setDistance(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleVelocity1Change = (event) => {
    console.log('nopeutta muutettu, nopeus: ', velocity1)
    setVelocity1(event.target.value)
  }

  const handleVelocity2Change = (event) => {
    console.log('nopeutta muutettu, nopeus: ', velocity2)
    setVelocity2(event.target.value)
  }

  const timeInSeconds = (velocity) => {
    if (velocity > 0) {
      const seconds = Math.ceil(distance / velocity * 3600)
      return seconds
    }
  }

  const fuelAmount = (velocity) => {
    let economy = car
    for (let i = 1; i < velocity; i++) {
      economy *= 1.009
    }
    return economy * distance / 100
  }

  const fuelPrice = (amount, price) => {
    return amount * price
  }

  let distanceOptions = []
  for (let i = 1; i < 2001; i++) {
    distanceOptions.push(i)
  }

  let velocityOptions = []
  for (let i = 1; i < 401; i++) {
    velocityOptions.push(i)
  }

  let priceOptions = []
  for (let i = 1.00; i < 2.01; i += 0.01) {
    const price = (Math.round(i * 100) / 100).toFixed(2)
    priceOptions.push(price)
  }

  return (
    <div>
      <h1>Autoilulaskuri</h1>
      <div className="container">
        <p className="guide">
          Tämä sovellus mahdollistaa kahden eri nopeuden vaikutuksen vertailun tietyllä matkalla.
          Sovellus laskee matkaan käytetyn ajan kyseisellä nopeudella sekä matkaan vaadittavan polttoainemäärän.
          Käyttäjä pääsee valitsemaan kolmesta eri autosta (polttoaineenkulutukset 3l / 100km, 3,5l / 100km ja 4l / 100km 1km/h nopeudella) sopivimman.
          Jokaisen auton polttoaineenkulutus nousee 1,009 kertaiseksi nopeuden kasvaessa 1km/h.
          Lisäksi käyttäjä pystyy syöttämään sovellukseen polttoaineen hinnan, jonka perusteella lasketaan nopeuden muutoksen taloudelliset vaikutukset.
        </p>
        <div className="form-alignment">
          <MainForm
            setCar={setCar} 
            distance={distance}
            velocity1={velocity1}
            velocity2={velocity2}
            price={price}
            handleDistanceChange={handleDistanceChange}
            handlePriceChange={handlePriceChange}
            handleVelocity1Change={handleVelocity1Change}
            handleVelocity2Change={handleVelocity2Change}
            distanceOptions={distanceOptions}
            velocityOptions={velocityOptions}
            priceOptions={priceOptions}
          />
        </div>
        <Result car={car} velocity1={velocity1} velocity2={velocity2} timeInSeconds={timeInSeconds} fuelAmount={fuelAmount} fuelPrice={fuelPrice} price={price} />
        <p className="guide">
          HUOM!
          Polttoaineenkulutukset ja niiden erotus näytetään kahden desimaalin tarkkuudella. Erotuksessa näytettävä määrä saattaa kuitenkin erota siitä, mikä erotus näyttäisi olevan itse laskemalla.
          Tämä johtuu siitä, että erotus on laskettu tarkempien likiarvojen perusteella.
        </p>
      </div>
    </div>
  )
}

export default App
