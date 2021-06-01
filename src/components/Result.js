import React from 'react'
import { Table } from 'react-bootstrap'

const Result = ({ car, velocity1, velocity2, timeInSeconds, fuelAmount, fuelPrice, priceAmount }) => {

  let timeDifference = Math.abs(timeInSeconds(velocity1) - timeInSeconds(velocity2))

  let fuelDifference = Math.abs(fuelAmount(velocity1) - fuelAmount(velocity2))

  const timeFormat = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    seconds %= 3600
    const minutes = Math.floor(seconds / 60)
    seconds %= 60
    return (`${hours} tuntia, ${minutes} minuuttia ja ${seconds} sekuntia`)
  }

  //With using Number.EPSILON we make sure that rounding goes right with numbers like 1.005
  const priceCounter = (amount, price) => {
    return (Math.round((priceAmount(amount, price) + Number.EPSILON) * 100) / 100).toFixed(2)
  }

  const fuelRounder = (amount) => {
    return (Math.round((amount + Number.EPSILON) * 100) / 100)
  }

  const pricePerHour = (time, price) => {
    if (time === 0) {
      return null
    }
    const priceOfHour = (Math.round((price / (time / 3600) + Number.EPSILON) * 100) / 100).toFixed(2)
    return `Säästetyn ajan hinta: ${priceOfHour} €/h`
  }

  //this should never happen
  if (car === 0) {
    return (
      <div className="request">
        Valitse auto
      </div>
    )
  }

  return (
    <div className="result">
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <td></td>
            <td>Nopeus 1</td>
            <td>Nopeus 2</td>
            <td>Erotus</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kesto</td>
            <td>{timeFormat(timeInSeconds(velocity1))}</td>
            <td>{timeFormat(timeInSeconds(velocity2))}</td>
            <td>{timeFormat(timeDifference)}</td>
          </tr>
          <tr>
            <td>Polttoaineen määrä</td>
            <td>{fuelRounder(fuelAmount(velocity1))} litraa</td>
            <td>{fuelRounder(fuelAmount(velocity2))} litraa</td>
            <td>{fuelRounder(fuelDifference)} litraa</td>
          </tr>
          <tr>
            <td>Polttoaineen hinta</td>
            <td>{priceCounter(fuelAmount(velocity1), fuelPrice)} euroa</td>
            <td>{priceCounter(fuelAmount(velocity2), fuelPrice)} euroa</td>
            <td>{priceCounter(fuelDifference, fuelPrice)} euroa</td>
          </tr>
        </tbody>
      </Table>
      <div className="time-price">
        {pricePerHour(timeDifference, priceCounter(fuelDifference, fuelPrice))}
      </div>
    </div>
  )
}

export default Result