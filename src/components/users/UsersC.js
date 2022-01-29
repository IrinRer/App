import { Component } from "react";
import * as axios from "axios";
import classes from "./Users.module.scss";
import img from "./img/search.svg";
import avatar from "./img/atomic.png";

class UsersC extends Component {

componentDidMount(){
          axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
              this.props.setUser(response.data.items);
            });
};

render() {
    const { users, followed } = this.props;
    const element = users.map((item) => {
      return (
        <div key={item.id} className={classes.wrapper}>
          <div className={classes.wrapper__img}>
            <img src={item.photos.small != null ? item.photos.small : avatar} />
            {/* <img src={avatar} /> */}
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
  }
}

export default UsersC;
