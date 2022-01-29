import { Component } from "react";
import * as axios from "axios";
import classes from "./Users.module.scss";
import img from "./img/search.svg";
import avatar from "./img/atomic.png";

class UsersC extends Component {

componentDidMount(){
          axios
            .get("https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=6ca5ae70a337e9cd63b6cd813ca09821")
            .then((response) => {
              this.props.setUser(response.data.data.results);
            });
};

render() {
    const { users, followed } = this.props;
    const element = users.map((item) => {
      return (
        <div key={item.id} className={classes.wrapper}>
          <div className={classes.wrapper__img}>
            {/* <img src={item.photos.small != null ? item.photos.small : avatar} /> */}
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
  }
}

export default UsersC;