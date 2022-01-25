import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
    <div className={classes.wrapper}>
        <img src="https://yt3.ggpht.com/a/AATXAJyRNsCN6jL6m_BzlvyjxXLgou-jiAraNfRwbn-_=s900-c-k-c0xffffffff-no-rj-mo" alt="avatar" className={classes.avatar}/>
        <p>Elizabeth York</p>
    </div>
    );
};

export default ProfileInfo;