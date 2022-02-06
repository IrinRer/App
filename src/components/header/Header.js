import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "../../img/Logo.svg";

const Header = ({ login, isAuth, deleteLogin }) => {
  console.log(`heder ${isAuth}`);
  return (
    <div className={classes.header}>
      <div className={classes.header__wrapper}>
        <img src={logo} alt="logo" />
        {isAuth ? (
          <div>
            {login}
            <button onClick={deleteLogin} className={classes.deleteLogin}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink to={"./login"} className={classes.link}>
            Login in
          </NavLink>
        )}
      </div>
      <div className={classes.wall}></div>
    </div>
  );
};

export default Header;
