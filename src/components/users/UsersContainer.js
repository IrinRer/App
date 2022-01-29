import { connect } from "react-redux";
import {followActionCreater, setUsersActionCreater} from '../../redux/UsersReducer';
import UsersC from "./UsersC";


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
  
  const UsersContainer = connect(mapStateToProps, mapDispathToProps)(UsersC)
  export default UsersContainer;
