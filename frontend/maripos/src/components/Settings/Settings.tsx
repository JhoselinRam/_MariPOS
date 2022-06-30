import { useCallback } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import Settings_Products from "./Settings_Options/Products/Settings_Products";
import Settings_Reports from "./Settings_Options/Reports/Settings_Reports";

function Settings({show, onHide, onExited}:{show:boolean, onHide:()=>void, onExited:()=>void}){
   
    const header = (node:HTMLDivElement)=>{
        if(node!=null){
            let closeButton = node.getElementsByTagName("button")[0];
            closeButton.style.background=`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat`;
        }
    };

    return (
        <Offcanvas show={show} onHide={onHide} onExited={onExited} placement="end">
            <Offcanvas.Header closeButton ref={header}>
                <Offcanvas.Title>Configuración</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Accordion>
                    <Settings_Products hidePanel={onHide}/>
                    <Settings_Reports/>
                </Accordion>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Settings;