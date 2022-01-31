import { useParams } from "react-router";
import ProfileContainer from "../Profile/ProfileContainer";

const IdUserProfile = () => {
    let {id} = useParams();
    console.log(id);
    return (
        <ProfileContainer id={id}/>
    )
}

export default IdUserProfile;