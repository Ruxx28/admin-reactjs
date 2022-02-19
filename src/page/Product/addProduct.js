import React, { useMemo, useState, useEffect } from "react";
import Select2 from "../../App/components/Select2"
import { Row, Col, Button, Form } from 'react-bootstrap';

function FormExample({ dataSelect, loadding }) {

  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const setField = (field, val) => {
    setForm({
      ...form,
      [field]: val
    })
    if (!!errors[field]) setErrors({
      ...errors,
      [field]: null
    })
  }

  const handleChangeSelect = (e) => {
    let values = []
    e.map(e => values.push(e.value))
    return values
  }

  const findFormErrors = () => {
    const { name } = form
    const newErrors = {}

    if (!name || name === '') newErrors.name = 'cannot be blank!'
    else if (name.length > 30) newErrors.name = 'name is too long!'
    return newErrors
  }

  const handleSubmit = e => {
    console.log(dataSelect)
    e.preventDefault()
    const newErrors = findFormErrors()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      alert('Thank you for your feedback!')
    }
  }

  const statusOption = [{ value: 'published', label: 'Published' }, { value: 'not-released', label: 'Not released' }]
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' onChange={e => setField('name', e.target.value)} isInvalid={!!errors.name} />
              <Form.Control.Feedback type='invalid'>
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>SKU</Form.Label>
              <Form.Control type='text' onChange={e => setField('sku', e.target.value)} isInvalid={!!errors.sku} />
              <Form.Control.Feedback type='invalid'>
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Select2 optionsData={statusOption}
                onChange={e => setField("food", e.value)}
                defaultValue={statusOption[0]} />
              <Form.Control.Feedback type='invalid'>
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control type='number' onChange={e => setField('price', e.target.value)} isInvalid={!!errors.price} />
              <Form.Control.Feedback type='invalid'>
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control type='text' onChange={e => setField('quantity', e.target.value)} isInvalid={!!errors.quantity} />
              <Form.Control.Feedback type='invalid'>
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea' onChange={e => setField('des', e.target.value)} isInvalid={!!errors.des} />
              <Form.Control.Feedback type='invalid'>
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Danh mục</Form.Label>
              <Select2 multi /* optionsData={dataSelect.category} */ loadingData={loadding} onChange={e => setField("category", handleChangeSelect(e))} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nhà sản xuất</Form.Label>
              <Select2 multi /* optionsData={dataSelect.supplier} */ loadingData={loadding} onChange={e => setField("supplier", handleChangeSelect(e))} />
            </Form.Group>
          </Col>
        </Row>
        <Button type='submit' className="mt-2">Submit Review</Button>
      </Form >
    </>
  );
}

export default FormExample;