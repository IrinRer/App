import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { addMess, changeMess, setUserMess } from "../../redux/MessReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  useEffect(() => {
    props.setUserMess(props.id);
  }, [props.id]);

  return (
    <Dialogs
      data={props.data}
      id={props.id}
      dataMess={props.dataMess}
      newMessage={props.newMessage}
      userMess={props.userMess}
      addMess={props.addMess}
      changeMess={props.changeMess}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    data: state.messages.data,
    dataMess: state.messages.dataMess,
    newMessage: state.messages.newMessage,
    userMess: state.messages.userMess,
  };
};

export default compose(
  connect(mapStateToProps, { addMess, changeMess, setUserMess }),
  AuthRedirect
)(DialogsContainer);
