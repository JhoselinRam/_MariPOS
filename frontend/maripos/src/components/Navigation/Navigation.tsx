import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Settings from "../Settings/Settings";
import logo from "../../assets/MariPos_logo.png";
import settings_icon from "../../assets/settings_icon.png";
import { useState } from "react";

function Navigation(){
    const [settingsShow, setSettingsShow] = useState(false);
    const [mountSettings, setMountSettings] = useState(false);

    function launchSettings(){
        setSettingsShow(true);
        setMountSettings(true);
    }

    return (
        <>
         <Navbar variant="dark" bg="primary" className="pt-1 pb-1 justify-content-between">
            
            <Container fluid className="p-0">
                <Navbar.Brand>
                    <img src={logo} alt="MariPOS" className="ms-2"/>
                </Navbar.Brand>
            </Container>
            
            <Container fluid>
                <Nav className="m-auto">
                    <a className="nav-link">Venta</a>
                </Nav>
            </Container>
        
            <Container fluid className="p-0">
                <Nav className="ms-auto">
                    <Nav.Link href="#" onClick={launchSettings}>
                        <img src={settings_icon} alt="Configuracion"/>
                    </Nav.Link>
                </Nav>
            </Container>
         </Navbar>
        
        {mountSettings && <Settings show={settingsShow} onHide={()=>setSettingsShow(false)} onExited={()=>setMountSettings(false)}></Settings>}
        </>
    );
}

export default Navigation;