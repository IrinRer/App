import MyPostContainer from '../myPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import pattern from '/Devel/js/react/react-1/my-app/src/img/pattern2.svg';



const Profile = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostContainer/>
       </div>
    );
};

export default Profile;