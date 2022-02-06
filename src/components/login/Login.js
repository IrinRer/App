import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage, withFormik } from "formik";
import * as yup from "yup";
import classes from "./Login.module.scss";
import { deleteLogin, setLogin } from "../../redux/AutoReducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  if(!props.isAuth) {
  return (
    <div className={classes.wrapper}>
      <h1>Login in</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .min(4, "Login must be at least 4 characters.")
            .required("Required"),
          password: yup
            .string()
            .min(4, "Password must be at least 4 characters.")
            .required("Required"),
        })}
        onSubmit={(values, {setSubmitting}) => {
          props.setLogin(values.email, values.password, values.rememberMe);
          setTimeout(() => { setSubmitting(false)
        }, 500)}}
      >
      {({ isSubmitting }) => (
        <Form>
          <div className={classes.login}>
             <Field type="text" name="email" placeholder="Login" />
            <ErrorMessage
              className={classes.error__mess}
              name="email"
              component="div"
            /> 
             <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage
              className={classes.error__mess}
              name="password"
              component="div"
            /> 
            <div className={classes.checkbox}>
              <Field type={"checkbox"} name="rememberMe" />
              remember me
            </div>
          </div>
            <div className={classes.button}>
              <button disabled={isSubmitting}>Login</button>
            </div>
        </Form>
      )}
      </Formik>
    </div>
  )
}

else {
  return (
    <Navigate to={'/Profile'}/>
  )
}
};

const mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {setLogin})(Login);
