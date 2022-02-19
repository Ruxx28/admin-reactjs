import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import Modal from "../../App/components/Modal"
import Select2 from "../../App/components/Select2"

export default function EditProduct({ data, show, isShow }) {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setForm(data)
    }, [data])
    const setField = (field, val) => {
        setForm({ ...form, [field]: val })
        if (!!errors[field]) setErrors({ ...errors, [field]: null })
    }
    function handleSubmit() {
        console.log(form)
    }
    return (
        <Modal
            isStatic size='lg' title='Edit form' show={show} isShow={isShow}
            handleSave={handleSubmit}>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' defaultValue={form.name} onChange={e => setField('name', e.target.value)} isInvalid={!!errors.name} />
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
                            <Select2 optionsData={[]}
                                onChange={e => setField("food", e.value)}
                                /* defaultValue={statusOption[0]} */ />
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
                            <Form.Control defaultValue={form.des} as='textarea' onChange={e => setField('des', e.target.value)} isInvalid={!!errors.des} />
                            <Form.Control.Feedback type='invalid'>
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Danh mục</Form.Label>
                            <Select2 multi optionsData={[]} /* loadingData={loadingData} */ onChange={e => setField("category", handleChangeSelect(e))} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nhà sản xuất</Form.Label>
                            <Select2 multi optionsData={[]} /* loadingData={loadingData1} */ onChange={e => setField("supplier", handleChangeSelect(e))} />
                        </Form.Group>
                    </Col>
                </Row>
            </Form >
        </Modal>
    )
}
