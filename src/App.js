import React, { useState } from 'react'
import MainForm from './components/MainForm'
import Result from './components/Result'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  const [car, setCar] = useState(3)
  const [distance, setDistance] = useState(1)
  const [velocity1, setVelocity1] = useState(1)
  const [velocity2, setVelocity2] = useState(1)
  const [fuelPrice, setFuelPrice] = useState(1.00)

  const handleDistanceChange = (event) => {
    setDistance(event.target.value)
  }

  const handleFuelPriceChange = (event) => {
    setFuelPrice(event.target.value)
  }

  const handleVelocity1Change = (event) => {
    setVelocity1(event.target.value)
  }

  const handleVelocity2Change = (event) => {
    setVelocity2(event.target.value)
  }

  const timeInSeconds = (velocity) => {
    //should be always true
    if (velocity > 0) {
      const seconds = Math.ceil(distance / velocity * 3600)
      return seconds
    }
  }

  const fuelAmount = (velocity) => {
    let economy = car * Math.pow(1.009, velocity - 1)
    return economy * distance / 100
  }

  const priceAmount = (amount, price) => {
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
      <h1>Autoilumittari</h1>
      <Container>
        <Row className="formRow">
          <Col>
            <MainForm
              setCar={setCar}
              distance={distance}
              velocity1={velocity1}
              velocity2={velocity2}
              fuelPrice={fuelPrice}
              handleDistanceChange={handleDistanceChange}
              handleFuelPriceChange={handleFuelPriceChange}
              handleVelocity1Change={handleVelocity1Change}
              handleVelocity2Change={handleVelocity2Change}
              distanceOptions={distanceOptions}
              velocityOptions={velocityOptions}
              priceOptions={priceOptions}
            />
          </Col>
          <Col>
            <p className="guide">
              T??m?? sovellus mahdollistaa kahden eri nopeuden vaikutuksen vertailun tietyll?? matkalla.
              Sovellus laskee matkaan k??ytetyn ajan kyseisell?? nopeudella sek?? matkaan vaadittavan polttoainem????r??n.
              K??ytt??j?? p????see valitsemaan kolmesta eri autosta (polttoaineenkulutukset 3l / 100km, 3,5l / 100km ja 4l / 100km 1km/h nopeudella) sopivimman.
              Jokaisen auton polttoaineenkulutus nousee 1,009 kertaiseksi nopeuden kasvaessa 1km/h.
              Lis??ksi k??ytt??j?? pystyy sy??tt??m????n sovellukseen polttoaineen hinnan, jonka perusteella lasketaan nopeuden muutoksen taloudelliset vaikutukset.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Result
              car={car}
              velocity1={velocity1}
              velocity2={velocity2}
              timeInSeconds={timeInSeconds}
              fuelAmount={fuelAmount}
              fuelPrice={fuelPrice}
              priceAmount={priceAmount}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="notice">
            HUOM!
            Polttoaineenkulutukset ja niiden erotus n??ytet????n kahden desimaalin tarkkuudella. Erotuksessa n??ytett??v?? m????r?? saattaa kuitenkin erota siit??, mik?? erotus n??ytt??isi olevan itse laskemalla.
            T??m?? johtuu siit??, ett?? erotus on laskettu tarkempien likiarvojen perusteella.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
