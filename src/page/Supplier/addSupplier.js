import React, { useMemo, useState, useEffect } from "react";
import useApi from "../../utils/useApi"
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import Select2 from "../../App/components/Select2";
import { toast } from 'react-toastify';

function FormExample() {
  const [loadingData, setLoadingData] = useState(true);
  const [optionsData, setOptionsData] = useState([])
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
    const { name } = form
    const newErrors = {}
    if (!name || name === '') newErrors.name = 'cannot be blank!'
    else if (name.length > 30) newErrors.name = 'name is too long!'
    return newErrors
  }
  const handleSubmit = e => {
    e.preventDefault()
    const newErrors = findFormErrors()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      sendData(form)
    }
  }

  const handleChange = e => {
    let values = []
    e.map(e=> values.push(e.value))
    setForm({
      ...form,
      ["products"]: values
    })
  }

  async function sendData(value) {
    await useApi
      .post("supplier", value)
      .then((response) => {
        const data = response.data
        if(data){
          toast.success(`Nhà cung cấp mới: ${data.name}`)
        }
      });
  }

  useEffect(() => {
    async function getData() {
      await useApi
        .get("product")
        .then((response) => {
          let newData = [];
          response.data.map((e) => {
            newData.push({ value: e._id, label: e.name })
          })
          setOptionsData(newData)
          setLoadingData(false)
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);

  return (
    <Row>
      <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Tên nhà sản xuất</Form.Label>
            <Form.Control type='text' onChange={e => setField('name', e)} isInvalid={!!errors.name} />
            <Form.Control.Feedback type='invalid'>
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Control type='text' onChange={e => setField('url', e)} isInvalid={!!errors.url} />
            <Form.Control.Feedback type='invalid'>
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' onChange={e => setField('des', e)} isInvalid={!!errors.des} />
            <Form.Control.Feedback type='invalid'>
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Các sản phẩm nhà sản xuất cung cấp ?</Form.Label>
            <Select2 optionsData={optionsData} loadingData={loadingData} onChange={handleChange} />
            <Form.Control.Feedback type='invalid'>
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type='submit' className="mt-2">Lưu danh mục sản phẩm</Button>
        </Form>
      </Col>
    </Row>

  );
}

export default FormExample;