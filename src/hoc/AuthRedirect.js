import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

let mapStateToPropsRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth
    };
};

  export const AuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
      console.log(props.isAuth)
      if (!props.isAuth) {
          return <Navigate to="/login" />;
        } 
      return <Component {...props} />
  }

let ConnectRedirect = connect(mapStateToPropsRedirect)(RedirectComponent);

 return ConnectRedirect;
}
