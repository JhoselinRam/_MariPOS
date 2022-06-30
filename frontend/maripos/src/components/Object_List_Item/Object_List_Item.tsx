import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ObjectListItemProps} from "../../interfaces/inerfaces";

function Object_List_Item({item, sizes, onSelectItem, itemId, selected}:ObjectListItemProps){
    return (
        <tr onClick={()=>onSelectItem(itemId)} className={selected?"table-info":""}>
            <td>
                <Row>
                    {item.map((entry, indx)=><Col xs={sizes[indx]} key={indx}>{entry}</Col>)}
                </Row>
            </td>
        </tr>
    );
}

export default Object_List_Item;