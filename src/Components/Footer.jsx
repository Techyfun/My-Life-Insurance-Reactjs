import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = ({page}) => {
    return (
        <footer className="py-3">
            <Container>
                <Row>
                    <Col className={`${page === "Home" ? "text-center":"" }`}>
                        {page === "Home" ?
                        <>
                            <div className="footer-links">
                                <ul className="my-2 p-0">
                                    <li>
                                        <a
                                        className="text-decoration-none fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/"
                                        >Home</a>
                                    </li>
                                    <li>
                                        <a
                                        className="text-decoration-none fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/about-us/"
                                        >
                                        About Us</a>
                                    </li>
                                    <li>
                                        <a
                                        className="text-decoration-none fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/contact-us/"
                                        >
                                        Contact Us</a>
                                    </li>
                                    <li>
                                        <a
                                        className="text-decoration-none fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/terms/"
                                        >
                                        Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a
                                        className="text-decoration-none fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/privacy-policy/"
                                        >
                                        Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copy-right">
                                <p>2022 MyLifeInsurance Solutions. All rights reserved.</p>
                            </div>
                        </> : ""}
                        
                        <div className="footer-text">
                            <p>
                                MyLifeInsurance Solutions is an independent life insurance
                                website created to help users find the best possible life cover
                                quote for their circumstances. We do not provide financial
                                advice, and simply offer an introductory service. We work with
                                brokers who search and compare life insurance policies from a
                                range of insurers. Our service is 100% free to use and you are
                                under no obligation to accept any of the quotes that you may
                                receive.
                            </p>
                            <p>
                                Please note that some of the brokers we work with may not
                                provide quotes from all of the insurers featured on our website.
                            </p>
                            <p>
                                Any third-party logos on this site is a trademark of it's
                                respective owner. We have no direct affiliation to life
                                insurance providers; the brokers we work with compare and
                                provide quotes from many different providers to find a suitable
                                option for you.
                            </p>
                            <p>
                                MyLifeInsurance Solutions, 7 Bell Yard, London WC2A 2JR.
                                MyLifeInsurance Solutions is a trading name of Innovativity doo,
                                a company registered in Serbia (Identification number 21350885).
                                Licenced by the Information Commissioner's Office, registration
                                number ZA496855.
                            </p>
                        </div>
                        {page === "Home2" || page === "Home3" ?
                        <>
                            <div className="copy-right mb-5">
                                <p>©2022 MyLifeInsurance Solutions. All rights reserved.</p>
                            </div>
                            <div className="footer-links">
                                <ul className="my-2 p-0">
                                    <li>
                                        <a
                                        className="fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/"
                                        >Home</a>
                                    </li>
                                    <li>
                                        <a
                                        className="fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/about-us/"
                                        >
                                        About Us</a>
                                    </li>
                                    <li>
                                        <a
                                        className="fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/contact-us/"
                                        >
                                        Contact Us</a>
                                    </li>
                                    <li>
                                        <a
                                        className="fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/terms/"
                                        >
                                        Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a
                                        className="fw-normal"
                                        href="https://www.mylifeinsurance.co.uk/privacy-policy/"
                                        >
                                        Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>

                        </> : ""}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;