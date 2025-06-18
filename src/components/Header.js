import { Link, useMatch } from "react-router-dom";
import css from './Header.module.css';
import publicUrl from 'utils/publicUrl.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Login from './Login';

function Header() {
    let buildingId = useMatch("/:buildingId");
    if (buildingId === null) {
        buildingId = "Home";
    }
    else {
        buildingId = buildingId.params.buildingId
    }
    return (
        <Container fluid>
            <Row className={css.head}>
                <Col sm>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img className={css.headLogo} src={publicUrl('/assets/ANVISS_Logo.svg')} alt='Logo' />
                    </Link>
                </Col>
                <Col sm style={{ textAlign: "center" }}>
                    <h1 style={{ marginTop: "2%", fontSize: "50px" }}>{buildingId}</h1>
                </Col>
                <Col sm style={{ textAlign: "right" }}>
                    <Login />
                </Col>
            </Row>
        </Container>
    )
}
export default Header;