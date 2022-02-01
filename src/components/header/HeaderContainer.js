import { Component } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Header from "./Header";
import {
    setUserData
  } from "../../redux/AutoReducer";


class HeaderContainer extends Component {
   componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}
      )
      .then((response) => {
          if(response.data.resultCode === 0) {
              let {id, login, email} = response.data.data;
              this.props.setUserData(id, email, login);
          }

      });
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer); 