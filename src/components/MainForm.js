import React from 'react'
import { Form, Col } from 'react-bootstrap'

const MainForm = ({
  setCar,
  distance,
  fuelPrice,
  velocity1,
  velocity2,
  handleDistanceChange,
  handleVelocity1Change,
  handleVelocity2Change,
  handleFuelPriceChange,
  distanceOptions,
  velocityOptions,
  priceOptions }) => {
  return (
    <Form className="form-border">
            <Form.Row>
              <Form.Group as={Col} controlId="carCheck">
                <Form.Label as="legend" column sm={2}>
                  Auto:
                </Form.Label>
                <Col>
                  <Form.Check
                    inline
                    type="radio"
                    name="car"
                    label="A (3l / 100km)"
                    onChange={() => setCar(3)}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    name="car"
                    label="B (3,5l / 100km)"
                    onChange={() => setCar(3.5)}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    name="car"
                    label="C (4l / 100km)"
                    onChange={() => setCar(4)}
                  />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="distanceSelection">
                <Form.Label>
                  Matka (km):
                </Form.Label>
                <Form.Control
                  className="select"
                  size="sm"
                  as="select"
                  value={distance}
                  onChange={handleDistanceChange}
                >
                {distanceOptions.map(d => (
                  <option key={d}>{d}</option>
                ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="priceSelection">
                <Form.Label>
                  polttoaineen hinta (€/l):
                </Form.Label>
                <Form.Control
                  className="select"
                  size="sm"
                  as="select"
                  value={fuelPrice}
                  onChange={handleFuelPriceChange}
                >
                  {priceOptions.map(p => (
                    <option key={p}>{p}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="velocity1Selection">
                <Form.Label>Nopeus 1 (km/h):</Form.Label>
                <Form.Control
                  className="select"
                  size="sm"
                  as="select"
                  value={velocity1}
                  onChange={handleVelocity1Change}
                >
                  {velocityOptions.map(v => (
                    <option key={v}>{v}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="velocity2Selection">
                <Form.Label>Nopeus 2 (km/h):</Form.Label>
                <Form.Control
                  className="select"
                  size="sm"
                  as="select"
                  value={velocity2}
                  onChange={handleVelocity2Change}
                >
                  {velocityOptions.map(v => (
                    <option key={v}>{v}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
  )
}

export default MainForm