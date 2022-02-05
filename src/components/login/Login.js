import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import classes from "./Login.module.scss";

const Login = () => {
  return (
    <div className={classes.wrapper}>
      <h1>Login in</h1>
      <Formik
        initialValues={{
          login: "",
          password: "",
          terms: false,
        }}
        validationSchema={yup.object({
          login: yup
            .string()
            .min(4, "Login must be at least 4 characters.")
            .required("Required"),
          password: yup
            .string()
            .min(4, "Password must be at least 4 characters.")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className={classes.login}>
             <Field type="text" name="login" placeholder="Login" />
            <ErrorMessage
              className={classes.error__mess}
              name="login"
              component="div"
            /> 
             <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage
              className={classes.error__mess}
              name="password"
              component="div"
            /> 
            <div className={classes.checkbox}>
              <Field type={"checkbox"} name="terms" />
              remember me
            </div>
          </div>
          <div className={classes.button}>
            <button>Login</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
