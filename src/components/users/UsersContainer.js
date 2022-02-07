import { Component } from "react";
import { connect } from "react-redux";
import {
  followed,
  getUsersButton,
  getUsers,
  followThunk 
} from "../../redux/UsersReducer";
import { getOffset, getLoad, getDisabled, getUserSuperSelector } from "../../selectors/userSelectors";
import Users from "./Users";

class UsersAPI extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.offset);
  }

  onChange = () => {
    this.props.getUsersButton(this.props.offset);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        followed={this.props.followed}
        offset={this.props.offset}
        load={this.props.load}
        disabled={this.props.disabled}
        onChange={this.onChange}
        followThunk = {this.props.followThunk}
      />
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.users.users,
//     offset: state.users.offset,
//     load: state.users.load,
//     disabled: state.users.disabled,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUserSuperSelector(state),
    offset: getOffset(state),
    load: getLoad(state),
    disabled: getDisabled(state)
  };
};

const UsersContainer = connect(mapStateToProps, {
  followed,
  getUsers,
  getUsersButton,
  followThunk 
})(UsersAPI);

export default UsersContainer;
