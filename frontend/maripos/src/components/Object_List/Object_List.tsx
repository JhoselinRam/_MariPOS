import React, { useImperativeHandle } from "react";
import Table from "react-bootstrap/Table";
import Object_List_Item from "../Object_List_Item/Object_List_Item";
import Object_List_New_Item from "../Object_List_New_Item/Object_List_New_item";
import {ObjectListProps, ListMethodStructure} from "../../interfaces/inerfaces";
import { useCallback, useMemo, useState } from "react";

const actions = {
    "newItem":`${process.env.REACT_APP_ACTIONS_NEW_SUPLIER}`,
    "editItem":`${process.env.REACT_APP_ACTIONS_MODIFY_SUPLIER}`,
    "deleteItem":`${process.env.REACT_APP_ACTIONS_DELETE_SUPLIER}`,
    "noAction":"noAction"
};

function Object_List({list, sizes}:ObjectListProps, ref:React.Ref<ListMethodStructure>){

    const [buildNewItem, setBuildNewItem] = useState(false);
    const [selection, setSelection] = useState("");
    const [action, setAction] = useState(actions["noAction"]);

    useImperativeHandle(ref,()=>{
        return {
            onNewItem
        };
    })

    const getSelection = useCallback((id:string)=>{
       setSelection(id); 
    },[]);

    const renderList = useMemo(()=>{
        const map = (item:string[])=>
            <Object_List_Item key={item[0]} 
                              item={item.filter((item,indx)=>indx!==0)} 
                              sizes={sizes} 
                              onSelectItem={getSelection} 
                              itemId={item[0]}
                              selected={item[0]===selection}/>;
        
        return list.map(map);
    },[list,sizes,selection]);

    function onNewItem(){
        setAction(actions["newItem"]);
        setBuildNewItem(true);
    }

    return (
        <Table striped hover borderless>
            <tbody>
                {renderList}
                {buildNewItem && <Object_List_New_Item values={action===actions["newItem"]?[]:[]} sizes={sizes}/>}
            </tbody>
        </Table>
    );
}

export default React.forwardRef(Object_List);