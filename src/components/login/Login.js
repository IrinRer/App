import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import classes from "./Login.module.scss";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      terms: false,
    },
    validationSchema: yup.object({
      login: yup
        .string()
        .min(4, "Login must be at least 4 characters.")
        .required("Required"),
      password: yup
        .string()
        .min(4, "Password must be at least 4 characters.")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.wrapper}>
      <h1>Login in</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.login}>
          <input
            type="text"
            name="login"
            placeholder="Login"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.login && formik.touched.login ? 
            <div className={classes.error__mess}>{formik.errors.login}</div>
           : null}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? 
            <div className={classes.error__mess}>{formik.errors.password}</div>
           : null}
          <div className={classes.checkbox}>
            <input
              type={"checkbox"}
              name="terms"
              value={formik.values.terms}
              onChange={formik.handleChange}
            />
            remember me
          </div>
        </div>
        <div className={classes.button}>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
