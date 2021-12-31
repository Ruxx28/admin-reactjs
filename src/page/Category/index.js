import React, { useMemo, useState, useEffect } from "react";
import useApi from "../../utils/useApi"
import windowSize from '../../utils/windowDimensions'
import { Row, Col, Card, Button, Stack, Tabs, Tab } from 'react-bootstrap';
import Datatables from "../../App/components/Datatables";
import AddCategory from "./addCategory"

function App() {
    // section store
    // const storeSelection = (selection) => localStorage.setItem('tabSelection', selection);

    // here you set a state to tell the component it need to wait
    //  until the result is fetched from the api
    const [loadingData, setLoadingData] = useState(true);
    const columns = useMemo(() => [
        { title: "Name", data: "name", key: "name" },
        { title: "Slug", data: "slug", key: "slug" },
        { title: "UpdatedAt", data: "updatedAt", key: "updatedAtv" }
    ]);
    const [data, setData] = useState([]);
    const { width, height } = windowSize();

    useEffect(() => {
        async function getData() {
            await useApi
                .get("category")
                .then((response) => {
                    setData(response.data);
                    setLoadingData(false);
                });
        }
        if (loadingData) {
            getData();
        }
    }, []);

    function actionEdit(val) {
        console.log('edit  ' + val)
    }

    function actionDelete(val) {
        data.find(e => e._id === val)
        .then(e =>{
            console.log('del ' + e)
        })
        
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
                            <AddCategory/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
}

export default App;