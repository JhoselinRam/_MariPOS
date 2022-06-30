import { useContext } from "react";
import Accordion from "react-bootstrap/esm/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import {SettingsContext} from "../../../../contexts/contexts";

function Settings_Products({hidePanel}:{hidePanel:()=>void}){
    const {setProvidersPanel, setMountProviders} = useContext(SettingsContext);

    function launchProviders(){
        hidePanel();
        setTimeout(()=>{
            setProvidersPanel(true);
            setMountProviders(true);
        },100);
    }

    return (
        <Accordion.Item eventKey="0" className="border-0">
            <Accordion.Header>Productos</Accordion.Header>
            <Accordion.Body className="ps-0 pe-0">
                <ListGroup variant="flush">
                    <ListGroup.Item action>
                        Insumos
                    </ListGroup.Item>
                    <ListGroup.Item action>
                        Productos
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={launchProviders}>
                        Proveedores
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Settings_Products;