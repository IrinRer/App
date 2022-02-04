import Spinner from '../../spinner/Spinner';
import classes from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <Spinner/>
    }
    return(
    <div className={classes.wrapper}>
        <img src="https://yt3.ggpht.com/a/AATXAJyRNsCN6jL6m_BzlvyjxXLgou-jiAraNfRwbn-_=s900-c-k-c0xffffffff-no-rj-mo" alt="avatar" className={classes.avatar}/>
        <p>{profile.fullName}</p>
        <ProfileStatus status={status} updateStatus={updateStatus}/>
        <img src={profile.photos.large}></img>
    </div>
    );
};

export default ProfileInfo;