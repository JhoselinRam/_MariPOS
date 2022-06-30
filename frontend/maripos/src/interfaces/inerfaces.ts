import React from "react";

export interface settingsContextProps{
    showProvidersPanel:boolean
    setProvidersPanel:React.Dispatch<React.SetStateAction<boolean>>,
    setMountProviders:React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProvidersList{
    "_id":{"$oid":string},
    Descripcion:string,
    RFC:string
}

export interface ObjectListProps{
    list:string[][],
    sizes:number[]
}

export interface ObjectListItemProps{
    item:string[],
    sizes:number[],
    onSelectItem:(arg0:string)=>void,
    itemId:string, 
    selected:boolean
}

export interface ObjectListNewItem{
    values:string[],
    sizes:number[]
}

export interface ListMethodStructure{
    onNewItem:()=>void
}