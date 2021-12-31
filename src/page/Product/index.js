import React, { useMemo, useState, useEffect } from "react";
import useApi from "../../utils/useApi"
import windowSize from '../../utils/windowDimensions'
import { Row, Col, Card, Button, Stack, Tabs, Tab } from 'react-bootstrap';
import Datatables from "../../App/components/Datatables";
import AddProduct from "./addProduct"

function App() {
    // section store
    // const storeSelection = (selection) => localStorage.setItem('tabSelection', selection);
    
    // here you set a state to tell the component it need to wait
    //  until the result is fetched from the api
    const [loadingData, setLoadingData] = useState(true);
    const columns = useMemo(() => [
        { title: "Name", data: "name", key: "name" },
        { title: "Quantity", data: "quantity", key: "quantity" },
        { title: "Category", data: null, key: "category" },
        { title: "Supplier", data: null, key: "supplier" },
        { title: "State", data: "status", key: "status" }
    ]);
    const [data, setData] = useState([]);
    const { width, height } = windowSize();

    useEffect(() => {
        async function getData() {
            await useApi
                .get("product")
                .then((response) => {
                    // check if the data is populated
                    setData(response.data);
                    // you tell it that you had the result
                    setLoadingData(false);
                });
        }
        if (loadingData) {
            // if the result is not ready so you make the axios call
            getData();
        }
    }, []);

    function actionEdit(val) {
        console.log('edit'+val)
    }

    function actionDelete(val) {
        console.log('del'+val)
    }

    return (
        <>
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
                            <AddProduct/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
}

export default App;