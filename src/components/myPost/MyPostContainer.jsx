import React from 'react';
import {addPostActionCreater, changePostActionCreater} from '../../redux/ProfileReducer';
import StoreContext from '../../redux/StoreContext';
import MyPost from './MyPost';


const MyPostContainer = (props) => {


    return (
        <StoreContext.Consumer>
            { store => {
            let state = store.getState();
            const onAddPost = () => {
                store.dispatch(addPostActionCreater());
            };
            
            const onChangePost = (text) => {
                store.dispatch(changePostActionCreater(text));
            };

        return  <MyPost updateNewPost={onChangePost} addPost={onAddPost}
            dataPost={state.profile.dataPost} newPost={state.profile.newPost}/> }
         }
       </StoreContext.Consumer>
    );
};

export default MyPostContainer;