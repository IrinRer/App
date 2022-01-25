import MyPost from '../myPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import pattern from '/Devel/js/react/react-1/my-app/src/img/pattern2.svg';



const Profile = ({dataPost, dispatch, newPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost dataPost = {dataPost} dispatch={dispatch} 
            newPost={newPost}/>
       </div>
    );
};

export default Profile;