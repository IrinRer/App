import classes from "./Users.module.scss";
import img from "./img/search.svg";
import avatar from "./img/atomic.png";
import * as axios from "axios";

const Users = ({ users, followed, setUser }) => {
  if (users.length === 0) {
    axios
      .get("https://gateway.marvel.com:443/v1/public/characters?limit=3&offset=210&apikey=6ca5ae70a337e9cd63b6cd813ca09821")
      .then((response) => {
       setUser(response.data.data.results);
      });
  }
  const element = users.map((item) => {
      debugger;
    return (
      <div key={item.id} className={classes.wrapper}>
        <div className={classes.wrapper__img}>
          {/* <img src={item.thumbnail != null ? item.thumbnail : avatar}/> */}
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
          <button onClick={() => followed(item.id)}>
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
      {element}
    </>
  );
};

export default Users;