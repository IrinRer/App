import { connect } from 'react-redux';
import {addPostActionCreater, changePostActionCreater} from '../../redux/ProfileReducer';
import MyPost from './MyPost';

let mapStateToProps = (state) => {
    return {
    dataPost: state.profile.dataPost,
    newPost: state.profile.newPost
    };
}

let mapDispathToProps = (dispatch) => {
    return {
    updateNewPost: text => dispatch(changePostActionCreater(text)),
    addPost: () =>  dispatch(addPostActionCreater())
    };
}

const MyPostContainer = connect(mapStateToProps, mapDispathToProps)(MyPost);

export default MyPostContainer;