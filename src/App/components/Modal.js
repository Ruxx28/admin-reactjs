import { Modal, Button } from 'react-bootstrap'
/* import useSize from '../../utils/windowDimensions' */

function ModalCustom({ title, children, isShow, handleSave, show, isStatic, size, center }) {

    /* const {width, height} = useSize() */

    function save() {
        isShow()
        handleSave()
    }

    return (
        <Modal
            /* dialogClassName={width<990 && "modal-90w"} */
            size={size}
            centered={center && false}
            show={show}
            onHide={isShow}
            backdrop={isStatic && "static"}
            keyboard={isStatic && true}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={isShow}>
                    Close
                </Button>
                <Button variant="primary" onClick={save}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCustom;