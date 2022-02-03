import { connect } from 'react-redux';
import {changePost, addPost} from '../../redux/ProfileReducer';
import MyPost from './MyPost';

let mapStateToProps = (state) => {
    return {
    dataPost: state.profile.dataPost,
    newPost: state.profile.newPost
    };
}

const MyPostContainer = connect(mapStateToProps, {changePost, addPost})(MyPost);

export default MyPostContainer;