import { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {SettingsContext} from "../../../../../../contexts/contexts";
import { ProvidersList, ListMethodStructure } from "../../../../../../interfaces/inerfaces";
import Object_List from "../../../../../Object_List/Object_List";

function Providers_Panel(){

    const bodyRef = useRef<HTMLDivElement>(null);
    const {showProvidersPanel, setProvidersPanel, setMountProviders} = useContext(SettingsContext);
    const [providersList, setProvidersList] = useState<ProvidersList[]>([]);
    const [headerWidth, setHeaderWidth] = useState(0);
    const listSizes = [7,5];
    const listMethods = useRef<ListMethodStructure>(null);

    useLayoutEffect(()=>{
        if(bodyRef.current != null){
            let scrollbarWidth = bodyRef.current.offsetWidth - bodyRef.current.clientWidth;
            setHeaderWidth(16+scrollbarWidth);
        }
    },[providersList]);

    async function getProvidersList(){
        let serverResponse = await fetch(`${process.env.REACT_APP_BACKEND}/providers`,{method:'GET'});
        let list:ProvidersList[] = await serverResponse.json();

        setProvidersList(list);
    }

    const  parseSupliersList = (list:ProvidersList[]) : string[][] =>
        providersList.filter(item=>item["Descripcion"]!=="Proveedor Eliminado").map(item=>[item["_id"]["$oid"], item["Descripcion"], item["RFC"]]);
    
    return (
        <>
            <Modal 
                show={showProvidersPanel} 
                onHide={()=>{setProvidersPanel(false)}}
                backdrop="static"
                keyboard={false}
                centered
                size="lg"
                scrollable={true}
                onExited={()=>setMountProviders(false)}
                onEnter={getProvidersList}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Proveedores</Modal.Title>
                </Modal.Header>
                <div className="ps-3" style={{paddingRight:`${headerWidth}px`}}>
                    <Table className="mb-0 mt-2">
                    <thead>
                        <tr>
                            <th>
                                <Row>
                                    <Col xs={listSizes[0]}>Proveedor</Col>
                                    <Col xs={listSizes[1]}>RFC</Col>
                                </Row>
                            </th>
                        </tr>
                    </thead>
                </Table>
                </div>
                <Modal.Body className="pt-0" ref={bodyRef}>
                    <Object_List list={parseSupliersList(providersList)} sizes={listSizes} ref={listMethods}/>
                </Modal.Body>
                <Modal.Footer>
                    <div className="me-auto">
                        <Button variant="outline-danger">Cancelar</Button>
                        <span className="text-danger ms-3">Mensaje</span>
                    </div>
                    <ButtonGroup>
                        <Button variant="outline-danger">Eliminar</Button>
                        <Button variant="outline-info">Editar</Button>
                        <Button variant="outline-primary" onClick={()=>listMethods.current?.onNewItem()}>Nuevo</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Providers_Panel;