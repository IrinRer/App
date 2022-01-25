import React from "react";
import {addMessActionCreater, changeMessActionCreater} from '../../redux/MessReducer';
import Dialogs from "./Dialogs";
// import star from '../../img/star.svg';

const DialogsContainer = ({data, dataMess, dispatch, newMessage}) => {
    
const addValContainer = () => {
  dispatch(addMessActionCreater());
}

const givValContainer = (text) => {
  dispatch(changeMessActionCreater(text));
}

  return (
    <Dialogs addValContainer={addValContainer} givValContainer={givValContainer}
    data={data} dataMess={dataMess} newMessage={newMessage}/>
  );
};

export default DialogsContainer;
