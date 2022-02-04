import { useParams } from "react-router";
import DialogsContainer from "../dialogs/DialogsContainer";

const IdUserDialogs = () => {
    let {id} = useParams();
    return (
        <DialogsContainer id={id}/>
    )
}

export default IdUserDialogs;