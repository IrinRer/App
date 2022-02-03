import { connect } from "react-redux";
import {addMess, changeMess} from '../../redux/MessReducer';
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    data: state.messages.data,
    dataMess: state.messages.dataMess,
    newMessage: state.messages.newMessage,
    isAuth: state.auth.isAuth
  }
};

const DialogsContainer = connect(mapStateToProps, {addMess, changeMess})(Dialogs)
export default DialogsContainer;
