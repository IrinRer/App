import { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuth} from "../../redux/AutoReducer";
import { UserApi } from "../../api/Api";


class HeaderContainer extends Component {
   componentDidMount() {
      this.props.setAuth();
   }

   render() {
       return (
         <Header login={this.props.login}
         isAuth = {this.props.isAuth}/>
       )
   }
};

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuth})(HeaderContainer); 