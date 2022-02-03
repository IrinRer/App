import { Navigate } from "react-router-dom";
import MyPostContainer from "../myPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <ProfileInfo profile={profile} />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
