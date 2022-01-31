import Spinner from '../../spinner/Spinner';
import classes from './ProfileInfo.module.css';

const ProfileInfo = ({profile}) => {
    debugger;
    if(!profile) {
        return <Spinner/>
    }

    return(
    <div className={classes.wrapper}>
        <img src={`${profile.thumbnail.path}.${profile.thumbnail.extension}`} alt="avatar" className={classes.avatar}/>
        <p>{profile.name}</p>
        <p>About me: {profile.description ? profile.description : 'The user has no description'}</p>
        <p>{profile.comics.available ? `The number of comics I participate in: ${profile.comics.available}`
        : 'No information about comics'}</p>
        <p>
        {profile.comics.items.map((item, i) => {
                        if (i > 2) return;
                        return (
                                <p>{item.name}</p>
                        )
        })}
        </p>
    </div>
    );
};

export default ProfileInfo;