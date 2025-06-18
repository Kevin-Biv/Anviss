import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { StoreContext } from 'contexts/StoreContext';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { sha256 } from 'js-sha256';

function LandingPage() {
    let {
        buildings, addUser, authenticated, users
    } = useContext(StoreContext);
    const [toggleAddUser, setToggleAddUser] = useState(false);
    const [newUser, setNewUser] = useState({username:"", password:""});
    const [helpText, setHelpText] = useState("");
    const buildingNames = {};
    for (const building of buildings) {
        var numExpy = 0
        for (const row of building.data) {
            if (isExpired(row.ndos) > 0) {
                numExpy += 1
            }
        }
        buildingNames[building.name] = [building.data.length, numExpy]
    }

    function isExpired(nd) {
        const today = new Date();
        const ndos = new Date(nd);
        var result = (today - ndos) / 86400000;
        return result;
    }

    function handleNewUserChange(e) {
        const id = e.target.id;
        const value = e.target.value;
        setNewUser({
            ...newUser,
            [id]: value
        })
    }
    
    function handleAddUser(e){
        console.log(newUser)
        const clash = users.find(user=>user.username===newUser.username)
        if (clash){
            setHelpText("That username is already taken")
        }else{
            setToggleAddUser(false);
            var hash = sha256.create();
            hash.update(newUser.password)
            addUser(newUser.username, hash.hex());
        }
        e.preventDefault();
    }

    return (
        <Container style={{ marginTop: "100px", backgroundColor: "#FFFDF3" }} fluid>
            <Row style={{ textAlign: "center", margin: "5px" }}>
                <h4>Select a building to start</h4>
            </Row>
            <Row className="d-flex justify-content-center">
                {
                    Object.keys(buildingNames).map((building, value) => {
                        return (
                            <Col sm={3} key={value}>
                                <Link key={building} to={"/".concat(building)} style={{ textDecoration: 'none', color: 'black' }}>
                                    <Card bg="outline-light"
                                        style={{ width: '15rem', padding: '5px' }}
                                        className="mb-2">
                                        <Card.Title>{building}</Card.Title>
                                        <Card.Body>{buildingNames[building][0]} items, {buildingNames[building][1]} expired</Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })
                }
            </Row>
            {authenticated &&
                <Row>
                    {toggleAddUser ?
                        <Form onSubmit={handleAddUser}>
                            <Form.Group className="mb-3" controlId="username" onChange={handleNewUserChange}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" autoComplete='username' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password" onChange={handleNewUserChange}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" autoComplete='current-password' />
                                <Form.Text style={{ color: "red" }}>
                                    {helpText}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Create User
                            </Button>
                        </Form> :
                        <Button variant="outline-success" style={{ margin: "40px", color: "black", width: "200px", outline: "none", boxShadow: "none" }} onClick={() => setToggleAddUser(true)}>
                            Add User
                        </Button>}
                </Row>

            }
        </Container>
    );
}

export default LandingPage;
