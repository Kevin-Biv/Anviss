import React, { useState, useContext } from 'react';
import { sha256 } from 'js-sha256';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { StoreContext } from 'contexts/StoreContext';

function Login() {
    let {
        users, authenticated, setAuthenticated
    } = useContext(StoreContext);

    const [loginForm, setLoginForm] = useState({ username: '', password: '' });
    const [show, setShow] = useState(false);
    const [helpText, setHelpText] = useState("");

    function handleLoginChange(e) {
        const id = e.target.id;
        const value = e.target.value;
        setLoginForm({
            ...loginForm,
            [id]: value
        })
    }

    function handleLogin(e) {
        const foundUser = users.find(user => user.username === loginForm.username)
        if (foundUser) {
            var hash = sha256.create();
            hash.update(loginForm.password)
            if (hash.hex() === foundUser.password) {
                setAuthenticated(true);
                setShow(false);
                setHelpText("");
            } else {
                setHelpText("Incorrect password")
            }
        } else {
            setHelpText("Invalid Username")
        }
        e.preventDefault()
    }
    function handleShow(){
        if (!authenticated){
            setShow(true)
        }else{
            setAuthenticated(false)
        }
    }

    return (
        <>
            <Button variant="outline-success" style={{ margin: "40px", color: "black", width: "200px", outline: "none", boxShadow: "none" }} onClick={handleShow}>
                <b>{authenticated ? "Logout" : "Login"}</b>
            </Button>
            {!authenticated &&
                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="username" onChange={handleLoginChange}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" autoComplete='username' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password" onChange={handleLoginChange}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" autoComplete='current-password' />
                                <Form.Text style={{ color: "red" }}>
                                    {helpText}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            }
        </>
    )
}

export default Login;