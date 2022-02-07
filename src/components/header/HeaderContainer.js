import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { deleteLogin} from "../../redux/AutoReducer";

class HeaderContainer extends Component {
   render() {
       return (
         <Header login={this.props.login}
         isAuth = {this.props.isAuth}
         deleteLogin={this.props.deleteLogin}/>
       )
   }
};

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {deleteLogin})(HeaderContainer); 