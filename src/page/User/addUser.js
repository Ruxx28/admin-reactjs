import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import useApi from '../../utils/useApi'
import { toast } from 'react-toastify';

export default function addUser() {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const setField = (field, val) => {
        if(val === ''){
            const formCopy = form
            delete formCopy[field]
            setForm({ ...formCopy })
        } else{
            setForm({ ...form, [field]: val })
        }
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
        console.log(form)
    }
    function emailValidation(email) {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email || regex.test(email) === false) { return false; }
        return true;
    }
    const findFormErrors = () => {
        const { name, email, password, phone, road, district, city } = form
        const newErrors = {}
        if (!name) newErrors.name = 'Cannot be blank'
        else if (name.length > 30) newErrors.name = 'Name is too long'
        else if (name.length < 5) newErrors.name = 'Name more than 6 degits'
        if (!email) newErrors.email = 'Cannot be blank'
        else if (email.length > 30) newErrors.email = 'Email is too long'
        else if (!emailValidation(email)) newErrors.email = 'Email is not valid'
        if (password) {
            if (password.length > 30) newErrors.password = 'Password is too long'
        }
        if (phone) {
            if (phone.length > 10) newErrors.phone = 'Phone is not valid'
        }
        if (road || district || city) {
            if (!road) newErrors.road = 'Cannot be blank'
            if (!district) newErrors.district = 'Cannot be blank'
            if (!city) newErrors.city = 'Cannot be blank'
        }
        return newErrors
    }
    const handleSubmit = e => {
        e.preventDefault()
        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            console.log(form)
            if (form['password']) {
                useApi.post('user', form)
                    .then(e => {
                        const data = e.data
                        if (data) {
                            toast.success(`Khách hàng mới: ${data.name}`)
                        }
                    })
            } else {
                useApi.post('user/guest', form)
                    .then(e => {
                        const data = e.data
                        if (data) {
                            toast.success(`Khách hàng mới: ${data.name}`)
                        }
                    })
            }
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('name', e.target.value)}
                        isInvalid={!!errors.name} />
                    <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('email', e.target.value)}
                        isInvalid={!!errors.email} />
                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        onChange={e => setField('password', e.target.value)}
                        isInvalid={!!errors.password} />
                    <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type='number'
                        onChange={e => setField('phone', e.target.value)}
                        isInvalid={!!errors.phone} />
                    <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Label>Address - road</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('road', e.target.value)}
                        isInvalid={!!errors.road} />
                    <Form.Control.Feedback type='invalid'>{errors.road}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>District</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('district', e.target.value)}
                        isInvalid={!!errors.district} />
                    <Form.Control.Feedback type='invalid'>{errors.district}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('city', e.target.value)}
                        isInvalid={!!errors.city} />
                    <Form.Control.Feedback type='invalid'>{errors.city}</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
