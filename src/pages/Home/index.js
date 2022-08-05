import React from 'react';
import { Form, Button, Row } from 'react-bootstrap'

const Home = () => {
    return (
        <div className='container' style={{ marginTop: '30px', marginLeft: '30%' }}>
            <Form>
                <Row>
                    <div className='col-sm-4'>
                        <Form.Label>Purpose</Form.Label>
                        <Form.Control type="text" placeholder='Purpose of Buying...' />
                    </div>
                    <div className='col-sm-4'>
                        <Form.Label>Budget</Form.Label>
                        <Form.Control type="text" placeholder='Budget you can afford' />
                    </div>
                </Row><br />
                <Row>
                    <div className='col-sm-4'>
                        <Form.Label>Type of Mobile</Form.Label>
                        <select className='form-select'>
                            <option>-- Select --</option>
                            <option>Budget Range</option>
                            <option>Mid Range</option>
                            <option>Flagships</option>
                        </select>
                    </div><br />
                    <div className='col-sm-4'>
                        <Form.Label>Type of Operating System</Form.Label>
                        <select className='form-select'>
                            <option>-- Select --</option>
                            <option>Android</option>
                            <option>iOS</option>
                        </select>
                    </div>
                </Row><br />
                <div className='col-sm-6' style={{ marginTop: '20px' }}>
                    <Form.Label>Specifications you focussed (Choose any 2 from below)</Form.Label>
                    <Form.Check label='Processor' />
                    <Form.Check label='Camera' />
                    <Form.Check label='Battery' />
                    <Form.Check label='Display' />
                    <Form.Check label='Ram & Storage' />
                </div>
                <div className='col-sm-6' style={{ marginTop: '20px', marginBottom: '40px' }}>
                    <Form.Label>Brand Constraints</Form.Label>
                    <Form.Check label='Apple' />
                    <Form.Check label='Samsung' />
                    <Form.Check label='Oneplus' />
                    <Form.Check label='Xiaomi' />
                    <Form.Check label='Realme' />
                    <Form.Check label='Oppo' />
                    <Form.Check label='Vivo' />
                </div>
                <Button>GET SUGGESTIONS</Button>
            </Form>
        </div>
    );
};

export default Home;