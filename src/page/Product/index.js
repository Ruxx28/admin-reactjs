import React, { useMemo, useState, useEffect } from "react"
import useApi from "../../utils/useApi"
import { Row, Col, Card, Stack, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Datatables from "../../App/components/Datatables"
import Pagination from "../../App/components/Pagination"

function App() {

    const columns = useMemo(() => [
        { title: "Name", data: "name", key: "name" },
        { title: "Quantity", data: "quantity", key: "quantity" },
        { title: "Price", data: "price", key: "price" },
        { title: "State", data: "status", key: "status" }
    ]);
    const [loadingData, setLoadingData] = useState(true)
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    useEffect(() => {
        async function getData() {
            useApi.get(`product?page=${currentPage}&limit=${pageSize}`)
                .then()
                .then(e => {
                    setData(e.data)
                    console.log(e.data)
                    setLoadingData(false)
                }).catch(err => console.log(err))
        }
        if (loadingData) { getData() }
    }, []);

    const [modal, setModal] = useState(false)
    const [editData, setEditData] = useState({})

    function actionEdit(val) {
        const itemRow = data.find(v => v._id === val)
        setEditData(itemRow)
        setModal(true)
    }

    function actionDelete(val) { useApi.delete(`product/${val}`) }

    function handelChangePage(e) {
        if (Number.isInteger(e) && e != currentPage) {
            setCurrentPage(e)
            console.log("setPage", e)
        }
    }

    return (
        <>
            <Card body>
                <Stack direction="horizontal">
                    <>123</>
                    <Link className="ms-auto" to='product/create'>
                        <Button size="sm">Create</Button>
                    </Link>
                </Stack>
                {loadingData ? (
                    <p>Loading Please wait...</p>
                ) : (
                    <>
                        <Row>
                            <Col>
                                <Datatables
                                    columns={columns}
                                    data={data.data}
                                    editRow={actionEdit}
                                    deleteRow={actionDelete}
                                />
                            </Col>
                        </Row>
                        <Stack direction="horizontal">
                            <div className="me-auto">Hiển thị 1 đến 10 trong số {data.total} mục</div>
                            <Pagination current={currentPage} onChange={handelChangePage} pageSize={pageSize} total={data.total} />
                        </Stack>
                    </>
                )}
            </Card>
            {/* <EditProduct data={editData} dataSelect={dataSelect} loadding={loadSelect} show={modal} isShow={() => setModal(!modal)} /> */}
        </>
    );
}

export default App;