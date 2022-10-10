import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InsuranceForm from './InsuranceForm';
import PolicyPrice from './PolicyPrice';

const Insurance = ({page}) => {
    const [amount, setAmount] = useState();
    const [coverage, setCoverage] = useState();
    const [years, setYears] = useState();
    return (
        <section className="insureance my-5 py-5">
            <Container>
                <Row className="g-5">
                    <Col md={7} sm={12}>
                        <InsuranceForm setAmount={setAmount} setCoverage={setCoverage} setYears={setYears} page={page}/>
                    </Col>
                    <Col md={5} sm={12} className="text-white text-center">
                        <PolicyPrice amount={amount} coverage={coverage} years={years} page={page}/>
                        {page==="Home"?"":<div className="questions">
                            <h2 className='fw-bold'>Questions?</h2>
                            <h4>Call us at <b>0161-694-7136</b></h4>
                        </div>}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Insurance;