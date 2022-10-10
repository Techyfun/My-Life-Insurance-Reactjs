import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../image/logo.png";
const Header = ({page}) => {
    return (
        <header className="pt-2">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} sm={12}>
                        <div className="logo text-center">
                            <Link to={`/${page}`}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className="header-content text-center text-white">
                            <h3 className="phone-number fw-bold">0161 694 7136</h3>
                            <h4 className="opening-time mb-3">Mon-Fri 9am-8pm</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;