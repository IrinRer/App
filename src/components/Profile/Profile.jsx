import MyPost from '../myPost/MyPost';
import MyPostContainer from '../myPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import pattern from '/Devel/js/react/react-1/my-app/src/img/pattern2.svg';



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props}/>
       </div>
    );
};

export default Profile;