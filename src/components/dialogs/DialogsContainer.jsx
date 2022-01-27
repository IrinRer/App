import React from "react";
import { connect } from "react-redux";
import {addMessActionCreater, changeMessActionCreater} from '../../redux/MessReducer';
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    data: state.messages.data,
    dataMess: state.messages.dataMess,
    newMessage: state.messages.newMessage
  }
};

let mapDispathToProps = (dispatch) => {
  return {
    addValContainer: () => dispatch(addMessActionCreater()),
    givValContainer: text => dispatch(changeMessActionCreater(text))
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs)
export default DialogsContainer;
