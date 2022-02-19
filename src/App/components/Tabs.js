import { Tab, Row, Col, Nav, Button } from 'react-bootstrap'

export default function index({ children }) {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="home">
            <Row>
                <Col>
                    <Nav className="flex-row bg-white">
                        <Nav.Item>
                            <Nav.Link eventKey="home"><i className='feather icon-home'></i></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='btn btn-primary btn-sm' eventKey="add">Create</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tab.Content>{children}</Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}