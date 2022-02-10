import { useEffect } from "react";
import { connect } from "react-redux";
import {
  followed,
  getUsersButton,
  getUsers,
  followThunk,
} from "../../redux/UsersReducer";
import Users from "./Users";

const UsersAPI = (props) => {
  useEffect(() => {
    props.getUsers(props.offset);
  }, []);

const onChange = () => {
    props.getUsersButton(props.offset);
};

  return (
    <Users
      users={props.users}
      followed={props.followed}
      offset={props.offset}
      load={props.load}
      disabled={props.disabled}
      onChange={onChange}
      followThunk={props.followThunk}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    offset: state.users.offset,
    load: state.users.load,
    disabled: state.users.disabled,
  };
};

const UsersContainer = connect(mapStateToProps, {
  followed,
  getUsers,
  getUsersButton,
  followThunk,
})(UsersAPI);

export default UsersContainer;
