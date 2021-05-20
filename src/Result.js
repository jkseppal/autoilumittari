import React from 'react'
import { Table } from 'react-bootstrap'

const Result = ({ car, velocity1, velocity2, timeInSeconds, fuelAmount, fuelPrice, price }) => {

  let timeDifference = timeInSeconds(velocity1) - timeInSeconds(velocity2)
  if (timeDifference < 0) {
    timeDifference *= -1
  }

  let fuelDifference = Math.round((fuelAmount(velocity1) - fuelAmount(velocity2) + Number.EPSILON) * 100) / 100
  if (fuelDifference < 0) {
    fuelDifference *= -1
  }

  const timeFormat = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    seconds %= 3600
    const minutes = Math.floor(seconds / 60)
    seconds %= 60
    return (`${hours} tuntia, ${minutes} minuuttia ja ${seconds} sekuntia`)
  }
  
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
            <td>{Math.round((fuelAmount(velocity1) + Number.EPSILON) * 100) / 100} litraa</td>
            <td>{Math.round((fuelAmount(velocity2) + Number.EPSILON) * 100) / 100} litraa</td>
            <td>{fuelDifference} litraa</td>
          </tr>
          <tr>
            <td>Polttoaineen hinta</td>
            <td>{(Math.round((fuelPrice(fuelAmount(velocity1), price) + Number.EPSILON) * 100) / 100).toFixed(2)} euroa</td>
            <td>{(Math.round((fuelPrice(fuelAmount(velocity2), price) + Number.EPSILON) * 100) / 100).toFixed(2)} euroa</td>
            <td>{(Math.round((fuelPrice(fuelDifference, price) + Number.EPSILON) *100) / 100).toFixed(2)} euroa</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Result