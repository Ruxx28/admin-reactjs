import React, { useMemo, useState, useEffect } from "react";
import useApi from "../../utils/useApi"
import windowSize from '../../utils/windowDimensions'
import { Row, Col, Card, Button, Stack, Form } from 'react-bootstrap';

function FormExample() {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value.target.value
    })
    if (!!errors[field]) setErrors({
      ...errors,
      [field]: null
    })
  }
  const findFormErrors = () => {
    const { name, food, rating, comment } = form
    const newErrors = {}
    // name errors
    if (!name || name === '') newErrors.name = 'cannot be blank!'
    else if (name.length > 30) newErrors.name = 'name is too long!'
    // food errors
    if (!food || food === '') newErrors.food = 'select a food!'
    // rating errors
    if (!rating || rating > 5 || rating < 1) newErrors.rating = 'must assign a rating between 1 and 5!'
    // comment errors
    if (!comment || comment === '') newErrors.comment = 'cannot be blank!'
    else if (comment.length > 100) newErrors.comment = 'comment is too long!'

    return newErrors
  }
  const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors()
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Thank you for your feedback!')
    }
  }

  return (
    <Form style={{ width: '300px' }} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' onChange={e => setField('name', e)} isInvalid={!!errors.name} />
        <Form.Control.Feedback type='invalid'>
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Food?</Form.Label>
        <Form.Control as='select' onChange={e => setField('food', e)} isInvalid={!!errors.name}>
          <option value=''>Select a food:</option>
          <option value='chicken parm'>Chicken Parm</option>
          <option value='BLT'>BLT</option>
          <option value='steak'>Steak</option>
          <option value='salad'>Salad</option>
        </Form.Control>
        <Form.Control.Feedback type='invalid'>
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control type='number' onChange={e => setField('rating', e)} isInvalid={!!errors.name}/>
        <Form.Control.Feedback type='invalid'>
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Comments</Form.Label>
        <Form.Control as='textarea' onChange={e => setField('comment', e)} isInvalid={!!errors.name}/>
        <Form.Control.Feedback type='invalid'>
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type='submit'>Submit Review</Button>
    </Form>
  );
}

export default FormExample;