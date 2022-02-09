import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import classes from "./Login.module.scss";
import { setLogin } from "../../redux/AutoReducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Required"),
      password: yup
        .string()
        .min(4, "Password must be at least 4 characters.")
        .required("Required"),
    }),
    onSubmit: (values, action) => {
      props.setLogin(
        values.email,
        values.password,
        values.rememberMe,
        action.setStatus
      );
      action.setSubmitting(true);
      setTimeout(() => {
        action.setSubmitting(false);
      }, 500);
      setTimeout(() => {
        action.resetForm();
      }, 5000);
    },
  });

  if (!props.isAuth) {
    return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__items}>
        <h1>Login in</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.login}>
            <input
              type="text"
              name="email"
              placeholder="Login"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className={classes.error__mess}>{formik.errors.email}</div>
            ) : null}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.password && formik.touched.password ? (
              <div className={classes.error__mess}>
                {formik.errors.password}
              </div>
            ) : null}
            {formik.status ? (
              <div className={classes.error__mess}>{formik.status.error}</div>
            ) : null}

            <div className={classes.checkbox}>
              <input
                type={"checkbox"}
                name="rememberMe"
                value={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              remember me
            </div>
          </div>
          <div className={classes.button}>
            <button disabled={formik.isSubmitting}>Login</button>
          </div>
        </form>
      </div>
    </div>
    );
  } else {
    return <Navigate to={"/Profile"} />;
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setLogin })(Login);
