import React from "react";
import {addMessActionCreater, changeMessActionCreater} from '../../redux/MessReducer';
import StoreContext from "../../redux/StoreContext";
import Dialogs from "./Dialogs";
// import star from '../../img/star.svg';

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer> 
      { store => {
      let state = store.getState();
      const addValContainer = () => {
          store.dispatch(addMessActionCreater());
        }
        
      const givValContainer = (text) => {
          store.dispatch(changeMessActionCreater(text));
        }
      return  <Dialogs addValContainer={addValContainer} givValContainer={givValContainer}
        data={state.messages.data} dataMess={state.messages.dataMess} newMessage={state.messages.newMessage}/> }
     }
    </StoreContext.Consumer>

  );
};

export default DialogsContainer;
