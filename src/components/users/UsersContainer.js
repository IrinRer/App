import { Component } from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  followActionCreater,
  setUsersActionCreater,
  setCurrentActionCreater,
  setUserCountActionCreater,
  loadToggleActionCreater
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

let mapDispathToProps = (dispatch) => {
  return {
    followed: (id) => dispatch(followActionCreater(id)),
    setUser: (users) => dispatch(setUsersActionCreater(users)),
    setPage: (page) => dispatch(setCurrentActionCreater(page)),
    setUserCount: (count) => dispatch(setUserCountActionCreater(count)),
    loadToggle: (load) => dispatch(loadToggleActionCreater(load))
  };
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(UsersAPI);

export default UsersContainer;
