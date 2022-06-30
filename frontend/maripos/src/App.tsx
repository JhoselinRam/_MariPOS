import Navigation from './components/Navigation/Navigation';
import Providers_Panel from './components/Settings/Settings_Options/Products/Options/Providers/Providers_Panel';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import {SettingsContext} from "./contexts/contexts";

function App() {
  const [showProvidersPanel, setProvidersPanel] = useState(false);
  const [mountProviders, setMountProviders] = useState(false);

  return (
    <SettingsContext.Provider value={{
      showProvidersPanel,
      setProvidersPanel,
      setMountProviders
      }}>
      
      <Container fluid style={{backgroundColor:"#dedede"}} className="p-0">
        <Navigation/>
        {mountProviders && <Providers_Panel/>}
      </Container>

    </SettingsContext.Provider>
    
  );
}

export default App;
