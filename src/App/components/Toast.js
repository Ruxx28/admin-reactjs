import React, { useState } from 'react'
import { ToastContainer, Toast } from 'react-bootstrap'

function Toast() {
    const [message, setMessage] = useState(initialState)

    return (
        <>
            <div
                aria-live="polite"
                aria-atomic="true"
                className="bg-dark position-relative"
                style={{ minHeight: '240px' }}
            >
                <ToastContainer className="p-3" position="top-start">
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </>
    );
}

export default Toast;