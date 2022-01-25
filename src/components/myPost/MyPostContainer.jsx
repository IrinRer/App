import React from 'react';
import {addPostActionCreater, changePostActionCreater} from '../../redux/ProfileReducer';
import MyPost from './MyPost';


const MyPostContainer = (props) => {
    debugger;
const onAddPost = () => {
    props.store.dispatch(addPostActionCreater());
};

const onChangePost = (text) => {
    props.store.dispatch(changePostActionCreater(text));
};

    return (
      <MyPost updateNewPost={onChangePost} addPost={onAddPost}
       dataPost={props.store.dataPost} newPost={props.store.newPost}/>
    );
};

export default MyPostContainer;