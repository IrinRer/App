import { connect } from "react-redux";
import Header from "./Header";
import { deleteLogin } from "../../redux/AutoReducer";

const HeaderContainer = (props) => {
  return (
    <Header
      login={props.login}
      isAuth={props.isAuth}
      deleteLogin={props.deleteLogin}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { deleteLogin })(HeaderContainer);
