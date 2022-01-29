import { Component } from "react";
import * as axios from "axios";
import classes from "./Users.module.scss";
import img from "./img/search.svg";
import avatar from "./img/atomic.png";

class UsersC extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&
            count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUser(response.data.items);
        this.props.setUserCount(response.data.totalCount);
      });
  }

  onPageChange = (p) => {
    this.props.setPage(p);
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${p}&
          count=${this.props.pageSize}`
    )
    .then((response) => {
      this.props.setUser(response.data.items);
    });
  }

  render() {
    const { users, followed, pageSize, totalUsersCount, currenPage, setPage, } = this.props;
    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pagesArr = [];

    for (let i = 1; i <= pageCount; i++) {
      if(i < 10) {
      pagesArr.push(i);
      }
    }

    const element = users.map((item) => {
      debugger;
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
        {pagesArr.map((item) => {
          return (
            <span
              className={currenPage === item ? classes.currenPage : null} 
              onClick={() => {this.onPageChange(item)}}>
              {item}
            </span>
          );
        })}
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
