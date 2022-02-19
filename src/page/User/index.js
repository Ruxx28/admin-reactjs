import React, { useMemo, useState, useEffect } from "react";
import useApi from "../../utils/useApi"
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Datatables from "../../App/components/Datatables";
import AddUser from "./addUser"

function App() {
    const [loadingData, setLoadingData] = useState(true);
    const columns = useMemo(() => [
        { title: "Name", data: "name", key: "name" },
        { title: "Email", data: "email", key: "Email" },
        { title: "Blocked", data: "blocked", key: "blocked" },
        { title: "Address", data: "addressCopy", key: "addressCopy"}
    ]);
    const [data, setData] = useState([]);
    async function getData() {
        await useApi
            .get("user")
            .then((res) => {
                let values = res.data
                for(let i in values){
                    if(values[i].addressActive){
                        const out = values[i].address.find(data=>data._id === values[i].addressActive)
                        if(out.road) values[i].addressCopy = out.road
                        if(out.district) values[i].addressCopy += ", "+out.district
                        if(out.city) values[i].addressCopy += ", "+out.city
                    } else { values[i].addressCopy = '' }
                }
                setData(values);
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
        useApi.delete(`user/${val}`)
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
                        <AddUser />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    );
}

export default App;