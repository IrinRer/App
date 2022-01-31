import { Component } from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  followActionCreater,
  setUsersActionCreater,
  setOffsetActionCreater,
  setLoadActionCreater,
  setDisabledActionCreater
} from "../../redux/UsersReducer";
import User from "./Users";

class UsersAPI extends Component {
  componentDidMount() {
    this.props.setLoad(true);
    this.props.setDisabled(true);
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=3&offset=${this.props.offset}&apikey=6ca5ae70a337e9cd63b6cd813ca09821`
      )
      .then((response) => {
        this.props.setLoad(false);
        this.props.setDisabled(false);
        this.props.setUser(response.data.data.results);
      });
  }

  onChange = () => {
    this.props.setLoad(true);
    this.props.setDisabled(true);
    this.props.setOffset(5);
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?limit=3&offset=${this.props.offset}&apikey=6ca5ae70a337e9cd63b6cd813ca09821`
      )
      .then((response) => {
        this.props.setUser(response.data.data.results);
        this.props.setLoad(false);
        this.props.setDisabled(false);
      });
  };

  render() {
    return (
      <>
        <User
          users={this.props.users}
          followed={this.props.followed}
          offset={this.props.offset}
          load={this.props.load}
          disabled={this.props.disabled}
          setLoad={this.props.setLoad}
          setOffset={this.props.setOffset}
          onChange = {this.onChange}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    offset: state.users.offset,
    load: state.users.load,
    disabled: state.users.disabled
  };
};

let mapDispathToProps = (dispatch) => {
  return {
    followed: id => dispatch(followActionCreater(id)),
    setUser: users => dispatch(setUsersActionCreater(users)),
    setOffset: num => dispatch(setOffsetActionCreater(num)),
    setLoad: bool => dispatch(setLoadActionCreater(bool)),
    setDisabled: bool => dispatch(setDisabledActionCreater(bool))
  };
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(UsersAPI);
export default UsersContainer;
