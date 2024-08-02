import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

//const [selectedDate, setDate] = useState(new Date());

const Forecast = () => {
    return (<Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
            </Form.Group>
        </Row>
        <Row>
            <Col>
            <Button variant="primary" type="submit">Search</Button>
            </Col>
        </Row>
    </Form>
    );
};
export default Forecast;