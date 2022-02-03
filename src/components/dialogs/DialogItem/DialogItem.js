import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const DialogItem = ({ name, id }) => {
  return (
    <div className={classes.wrapper__dialogs__item}>
      <div className={classes.wrapper__avatar}></div>
      <NavLink to={`/dialogs/${id}`} className={setActive}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
