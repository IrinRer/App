import { Component } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  followed,
  setUser,
  setPage,
  setUserCount,
  loadToggle
} from "../../redux/UsersReducer";
import Users from "./Users";
import classes from "./Users.module.scss";
import Spinner from "../spinner/Spinner";

class UsersAPI extends Component {
  componentDidMount() {
    this.props.loadToggle(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&
            count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.loadToggle(false)
        this.props.setUser(response.data.items);
        this.props.setUserCount(response.data.totalCount);
      });
  }

  onPageChange = (p) => {
    this.props.setPage(p);
    this.props.loadToggle(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&
          count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.loadToggle(false);
        this.props.setUserCount(response.data.totalCount);
        this.props.setUser(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isLoad ? <Spinner className={classes.load}/>:  <Users
          users={this.props.users}
          followed={this.props.followed}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currenPage={this.props.currenPage}
          onPageChange={this.onPageChange}
        />}
       
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currenPage: state.users.currenPage,
    isLoad: state.users.isLoad,
  };
};

const UsersContainer = connect(mapStateToProps, { followed, setUser, setPage,
  setUserCount, loadToggle})(UsersAPI);

export default UsersContainer;
