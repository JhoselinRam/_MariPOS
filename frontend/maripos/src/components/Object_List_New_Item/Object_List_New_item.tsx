import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import {ObjectListNewItem} from "../../interfaces/inerfaces";

function Object_List_New_Item({values, sizes}:ObjectListNewItem){
    return (
        <tr>
            <td>
                <Row>
                    {sizes.map((entry,indx)=><Col xs={entry} key={indx}>
                        <FormControl type="text" autoComplete="off" defaultValue={values.length>0?values[indx]:""}/>
                    </Col>)}
                </Row>
            </td>
        </tr>
    );
}

export default Object_List_New_Item;