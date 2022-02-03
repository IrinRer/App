import { connect } from "react-redux";
import { compose } from "redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { addMess, changeMess } from "../../redux/MessReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    data: state.messages.data,
    dataMess: state.messages.dataMess,
    newMessage: state.messages.newMessage,
  };
};

export default compose( connect(mapStateToProps, { addMess, changeMess }),
 AuthRedirect)(Dialogs);
