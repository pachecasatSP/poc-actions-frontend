import QuantitySlider from "../Common/quantitySliderComponent";
import { Button, Card, Col, Row } from "react-bootstrap";
import './forecast.css';


const ForecastComponent = (props) => {

    return (
        <>
            <div style={{ margin: '25px', align: 'center' }}>
                <Row>
                    <Col xs lg="1">
                        <Button size="sm" onClick={props.onClick} >
                            {(props.Loaded ? 'Refresh' : 'Load')}
                        </Button>
                    </Col>
                    <Col xs lg="2">
                        <QuantitySlider initialValue={props.initialSliderValue} disabled={!props.Loaded} onChangeCommitted={props.onChangeCommitted} />
                    </Col>
                </Row>

            </div>
            <div style={{ margin: '20px', align: 'center' }}>

                {props.source && props.source.map((forecast) => {
                    return (
                        <>
                            <Card style={{ width: '18rem', margin: '6px', float: 'left' }}>
                                <Card.Body>
                                    <Card.Title>{forecast.formatDate}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> {forecast.summary}</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li>{forecast.temperatureC} degrees C</li>
                                            <li>{forecast.temperatureF} degrees F</li>
                                        </ul>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </>);
                })}
            </div></>);
}

export default ForecastComponent;