import React, { useMemo, useState, useEffect } from "react";
import useApi from "../../utils/useApi"
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Datatables from "../../App/components/Datatables";
import AddSupplier from "./addSupplier"

function App() {
    const [loadingData, setLoadingData] = useState(true);
    const columns = useMemo(() => [
        { title: "Name", data: "name", key: "name" },
        { title: "Description", data: "des", key: "des" },
        { title: "Url", data: "url", key: "url" }
    ]);
    const [data, setData] = useState([]);
    async function getData() {
        await useApi
            .get("supplier")
            .then((response) => {
                setData(response.data);
                setLoadingData(false);
            });
    }

    useEffect(() => {
        if (loadingData) {
            getData();
        }
    }, []);

    function actionEdit(val) {
        console.log('edit ' + val)
    }

    function actionDelete(val) {
        const y = confirm('Are you sure you want to delete this item')
        if (y) {
            useApi.delete(`supplier/${val}`)
            getData()
        }
    }

    return (
        <Row>
            <Col>
                <Tabs defaultActiveKey="list">
                    <Tab eventKey="list" title="Danh sách">
                        <Row>
                            <Col>
                                {loadingData ? (
                                    <p>Loading Please wait...</p>
                                ) : (
                                    <Datatables columns={columns} data={data} editRow={actionEdit} deleteRow={actionDelete} />
                                )}
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="add" title="Thêm mới">
                        <AddSupplier />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    );
}

export default App;