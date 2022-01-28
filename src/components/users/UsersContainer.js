import { connect } from "react-redux";
import {followActionCreater, unfollowActionCreater, setUsersActionCreater} from '../../redux/UsersReducer';
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
      users: state.users.users
    }
  };
  
  let mapDispathToProps = (dispatch) => {
    return {
      followed: id => dispatch(followActionCreater(id)),
    //   unfollowed: id => dispatch(unfollowActionCreater(id)),
      setUser: (users) => dispatch(setUsersActionCreater(users))
    }
  };
  
  const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users)
  export default UsersContainer;
  