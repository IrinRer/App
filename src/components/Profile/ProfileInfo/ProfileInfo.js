import Spinner from "../../spinner/Spinner";
import classes from "./ProfileInfo.module.scss";
import ProfileStatus from "./ProfileStatus";
import avatar from "../../users/img/atomic.png";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Spinner />;
  }
  return (
    <div className={classes.wrapper}>
      <h2>User page</h2>
      {profile.photos.large ? (
        <img
          src={profile.photos.large}
          alt="avatar profile"
          className={classes.avatar}
        />
      ) : (
        <img
          src={avatar}
          alt="default avatar profile"
          className={classes.avatar}
        />
      )}
      <p>{profile.fullName}</p>
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
