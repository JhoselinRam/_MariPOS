import Accordion from "react-bootstrap/esm/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

function Settings_Reports(){
    return (
        <Accordion.Item eventKey="1" className="border-0">
            <Accordion.Header>Reportes</Accordion.Header>
            <Accordion.Body className="ps-0 pe-0">
                <ListGroup variant="flush">
                    <ListGroup.Item action>
                        Monitor de venta
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        Ventas
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        Descuentos
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Settings_Reports;