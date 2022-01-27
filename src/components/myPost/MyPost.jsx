import React from 'react';
import classes from './MyPost.module.css';
import Post from './post/Post';
import {addPostActionCreater, changePostActionCreater} from '../../redux/ProfileReducer';

const MyPost = ({dataPost, newPost, addPost, updateNewPost}) => {
  debugger;
 const postElement = dataPost.map(item => {
    return (
    <Post post = {item.post} like = {item.like} key = {item.id}/>
    );
 });

const onAddPost = () => {
    addPost();
};

const onChangePost = (e) => {
    const text = e.target.value;
    updateNewPost(text);
}
    return (
        <div className={classes.post}>
                <h3>My posts</h3>
                <div className={classes.create__new__post}>
                    <textarea onChange={onChangePost} value={newPost}/>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                {postElement}
        </div>
    );
};

export default MyPost;