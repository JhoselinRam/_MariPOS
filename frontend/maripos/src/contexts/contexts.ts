import React from "react";
import {settingsContextProps} from "../interfaces/inerfaces";

export let SettingsContext = React.createContext<settingsContextProps>({
    "showProvidersPanel":false,
    "setProvidersPanel": ()=>{},
    "setMountProviders": ()=>{}
});