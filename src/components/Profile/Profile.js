import MyPostContainer from "../myPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
