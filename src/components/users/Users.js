import classes from "./Users.module.scss";
import img from "./img/search.svg";
import avatar from "./img/atomic.png";
import { NavLink } from "react-router-dom";
import Spinner from "../spinner/Spinner";

const Users = ({
  users,
  followThunk,
  load,
  onChange,
  disabled
}) => {
  const element = users.map((item) => {
    return (
      <div key={item.id} className={classes.wrapper}>
        <div className={classes.wrapper__img}>
          <NavLink to={`/Profile/${item.id}`}>
            <img src={item.photos.small != null ? item.photos.small : avatar} />
          </NavLink>
          <button
            onClick={() => {
              followThunk(item.id);
            }}>
            {item.followed ? "Follow" : "Unfollow"}
          </button>
        </div>
        <div className={classes.wrapper__inf}>
          <h3>{item.name}</h3>
          <h3>{item.country}</h3>
          <h3>{item.city}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <form className={classes.form}>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <img src={img} alt="icon search" />
        </button>
      </form>
      {load ? <Spinner/> : element}
      <button onClick={onChange} className={classes.users_button} disabled={disabled}>
        Load more
      </button> 
    </>
  );
};
export default Users;
